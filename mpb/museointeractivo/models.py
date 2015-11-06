# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
import datetime, xlrd
from django.core.exceptions import ValidationError

class campeonato(models.Model):		

	titulo_es = models.CharField(max_length=200,  verbose_name='Título Español')
	titulo_en = models.CharField(max_length=200,  verbose_name='Título Inglés')
	titulo_por = models.CharField(max_length=200,  verbose_name='Título Portugués')

	tipo = models.CharField( max_length=15,
							 choices=(('NAC','Nacional'),('INT','Internacional')), 
							 default=('NAC','Nacional')
							)
	anio = models.IntegerField( verbose_name='Año')
	imagen_copa = models.ImageField(upload_to='', 
							default='',
							blank=True,
							#validators=[validate_copa(tipo)],
							help_text='Imagen de la copa - obligatorio si es Internacional.')
	imagen_fondo = models.ImageField(upload_to='')
	imagen_campo = models.ImageField(upload_to='', 
							default='',
							blank=True,
							#validators=[validate_campo(tipo)],
							help_text='Gráfico con formación del equipo - obligatorio si es Internacional.')
	imagen_formacion = models.ImageField(upload_to='', 
							default='',
							verbose_name='Imagen del Equipo')

	curiosidades_es = models.FileField(upload_to=settings.MEDIA_ROOT,  
							verbose_name='Curiosidades - Español',
							default='',
							blank=True,
							#validators=[validate_curiosidades(tipo), 
							#				validate_formato],
							help_text='Texto de curiosidades - obligatorio si es nacional.')
	curiosidades_en = models.FileField(upload_to=settings.MEDIA_ROOT,  
							verbose_name='Curiosidades - Inglés',
							default='',
							blank=True,
							#validators=[validate_curiosidades(tipo), 
							#				validate_formato],
							help_text='Texto de curiosidades - obligatorio si es nacional.')
	curiosidades_por = models.FileField(upload_to=settings.MEDIA_ROOT,  
							verbose_name='Curiosidades - Portugués',
							default='',
							blank=True,
							#validators=[validate_curiosidades(tipo), 
							#				validate_formato],
							help_text='Texto de curiosidades - obligatorio si es nacional.')

	video1 = models.FileField(upload_to='')
	video2 = models.FileField(upload_to='')
	video3 = models.FileField(upload_to='')
	tablas = models.FileField(upload_to=settings.MEDIA_ROOT, 
			help_text="Archivo Excel XLSX con información de: posiciones del campeonato (pestaña 'posiciones'), "+
							"jugadores (pestaña 'jugadores'), y la campaña (pestaña 'campania').")

	def __str__(self):
		return self.titulo_es

	def img_copa_thumb(self):
		if self.imagen_copa:
			return u'<img src="%s" width="100px">' % self.imagen_copa.url
		else:
			return '(Sin imagen)'
	def img_fondo_thumb(self):
		if self.imagen_fondo:
			return u'<img src="%s" width="100px"/>' % self.imagen_fondo.url
		else:
			return '(Sin imagen)'
	def img_formacion_thumb(self):
		if self.imagen_fondo:
			return u'<img src="%s" width="100px" />' % self.imagen_formacion.url
		else:
			return '(Sin imagen)'
	def img_campo_thumb(self):
		if self.imagen_fondo:
			return u'<img src="%s" width="100px" />' % self.imagen_campo.url
		else:
			return '(Sin imagen)'
	img_copa_thumb.short_description = 'Preview'	
	img_copa_thumb.allow_tags = True
	img_fondo_thumb.short_description = 'Preview'	
	img_fondo_thumb.allow_tags = True
	img_formacion_thumb.short_description = 'Preview'	
	img_formacion_thumb.allow_tags = True
	img_campo_thumb.short_description = 'Preview'	
	img_campo_thumb.allow_tags = True

	def get_posiciones(self):
		return self.leer_tablas('posiciones')
	def get_campania(self):
		return self.leer_tablas('campania')
	def get_jugadores(self):
		return self.leer_tablas('jugadores')

	def get_curiosidades_es(self):
		if (not bool(self.curiosidades_es)):
			return ''
		path = self.curiosidades_es.url
		with open(path) as fp:
			return fp.read().replace('\n', '<br>')
	def get_curiosidades_en(self):
		if (not bool(self.curiosidades_en)):
			return ''
		path = self.curiosidades_en.url
		with open(path) as fp:
			return fp.read().replace('\n', '<br>')
	def get_curiosidades_por(self):
		if (not bool(self.curiosidades_por)):
			return ''
		path = self.curiosidades_por.url
		with open(path) as fp:
			return fp.read().replace('\n', '<br>')

	def leer_tablas(self, nombre_tabla):
		wb = xlrd.open_workbook(self.tablas.url)
		for s in wb.sheets():
			if s.name != nombre_tabla:
				continue
			filas = []
			x = 0
			header = []
			for row in range(s.nrows):
				x += 1
				if (x==1):
					for col in range(s.ncols):
						header.append(s.cell(row,col).value)
					continue
				columnas = []
				y = 0
				for col in range(s.ncols):
					valor =s.cell(row,col).value
					if (header[y]=='DIA') or (header[y]=='Dia'):
						valor = datetime.datetime(*xlrd.xldate_as_tuple(valor, wb.datemode)).strftime('%d/%m/%Y')
					else:
						if (type(valor) == float):
							valor = str(valor)
							if(valor[-2:]=='.0' or valor[-2:]==',0'):
								valor= valor[:-2]
						if (valor==''):
							valor=0
					columnas.append(valor)
					y += 1
				filas.append(columnas)
			return filas

	def get_datos_jugadores(self):
		return (self.leer_tablas('jugadores'))
	def get_datos_posiciones(self):
		return (self.leer_tablas('posiciones'))
	def get_datos_campania(self):
		return (self.leer_tablas('campania'))

	def save(self, *args, **kwargs):
		if self.tipo=='Internacional' and (self.imagen_copa=='' or self.imagen_copa==None):
			raise ValidationError('Para los campeonatos internacionales es necesario subir una imagen de copa.')
		if self.tipo=='Internacional' and  (self.imagen_fondo=='' or self.imagen_fondo==None):
			raise ValidationError('Para los campeonatos internacionales es necesario subir una imagen de campo.')

		super(campeonato,self).save(*args,**kwargs)