# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
import datetime, xlrd
import os

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
							help_text='Imagen de la copa - obligatorio si es Internacional. Resolución: 300x300')
	imagen_fondo = models.ImageField(upload_to='')
	imagen_campo = models.ImageField(upload_to='', 
							default='',
							blank=True,
							verbose_name='Imagen de Posiciones',
							help_text='Gráfico con formación del equipo - obligatorio si es Internacional. Resolución: 600x835')
	imagen_formacion = models.ImageField(upload_to='', 
							default='',
							verbose_name='Imagen del Equipo')

	curiosidades_es = models.FileField(upload_to='',  
							verbose_name='Curiosidades - Español',
							default='',
							blank=True,
							help_text='Texto de curiosidades - obligatorio si es nacional.')
	curiosidades_en = models.FileField(upload_to='',  
							verbose_name='Curiosidades - Inglés',
							default='',
							blank=True,
							help_text='Texto de curiosidades - obligatorio si es nacional.')
	curiosidades_por = models.FileField(upload_to='',  
							verbose_name='Curiosidades - Portugués',
							default='',
							blank=True,
							help_text='Texto de curiosidades - obligatorio si es nacional.')

	videoBoca = models.FileField(upload_to='',
							verbose_name='Video de Boca.',
							help_text='Aspect Ratio: 5:4')
	videoMundo = models.FileField(upload_to='',
							blank=True,
							verbose_name='Video del Mundo.',
							help_text='Aspect Ratio: 5:4')
	videoArgentina = models.FileField(upload_to='',
							blank=True,
							verbose_name='Video de la Argentina.',
							help_text='Aspect Ratio: 5:4')
	tablas = models.FileField(upload_to='', 
			help_text="Archivo Excel XLSX con información de: posiciones del campeonato (pestaña 'posiciones'), "+
							"jugadores (pestaña 'jugadores'), y la campaña (pestaña 'campania').")

	def __str__(self):
		return unicode(self.titulo_es)

	def __unicode__(self):
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

	def get_curiosidades(self, curiosidades):
		if (not bool(curiosidades)):
			return ''
		path = os.path.join(settings.PROJECT_PATH,curiosidades.url[1:])
		with open(path) as fp:
			texto = fp.read()
			return texto
			
	def get_curiosidades_es(self):
		return self.get_curiosidades(self.curiosidades_es)
	def get_curiosidades_en(self):
		return self.get_curiosidades(self.curiosidades_en)
	def get_curiosidades_por(self):
		return self.get_curiosidades(self.curiosidades_por)

	def leer_tablas(self, nombre_tabla):
		path = os.path.join(settings.PROJECT_PATH, self.tablas.url[1:])
		wb = xlrd.open_workbook(path)
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
				if (s.cell(row,0).value == ''):
					continue
				columnas = []
				y = 0
				for col in range(s.ncols):
					valor =s.cell(row,col).value
					if (header[y]=='DIA') or (header[y]=='Dia'):
						try:
							valor = datetime.datetime(*xlrd.xldate_as_tuple(valor, wb.datemode)).strftime('%d/%m/%Y')
						except Exception, e:
							print e
							valor = valor
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
	

	def get_observaciones_posiciones(self):
		tabla = self.get_datos_posiciones()
		lista_obs = []
		for fila in tabla:
			observaciones = fila[8]
			if (observaciones != '' and observaciones != '0' and observaciones != 0 and observaciones is not None):
				lista_obs.append(observaciones)
		return lista_obs
	
	def get_observaciones_partidos(self):
		tabla = self.get_datos_campania()
		lista_obs = []
		for fila in tabla:
			observaciones = fila[5]
			if (observaciones != '' and observaciones != '0' and observaciones != 0 and observaciones is not None):
				lista_obs.append(observaciones)
		return lista_obs
	def get_datos_jugadores(self):
		tabla = (self.leer_tablas('jugadores'))
		dt = []
		arqueros = []
		defensores = []
		mediocampistas = []
		delanteros = []
		for fila in tabla:
			if (fila[3].upper() == 'DT' or fila[3].upper() == 'D.T.' or fila[3].upper() == 'TECNICO'):
				dt.append(fila)
			if (fila[3].upper() == 'ARQUERO'):
				arqueros.append(fila)
			if (fila[3].upper() == 'DEFENSOR'):
				defensores.append(fila)
			if (fila[3].upper() == 'MEDIOCAMPISTA'):
				mediocampistas.append(fila)
			if (fila[3].upper() == 'DELANTERO'):
				delanteros.append(fila)
		datos = {'dt':dt, 'arqueros': arqueros, 'defensores': defensores, 'mediocampistas': mediocampistas, 'delanteros': delanteros}
		return datos
		
	def get_arqueros(self):
		datos = self.get_datos_jugadores()
		return (datos['arqueros'])
	
	def get_mediocampistas(self):
		datos = self.get_datos_jugadores()		
		return (datos['mediocampistas'])
		
	def get_defensores(self):
		datos = self.get_datos_jugadores()
		return (datos['defensores'])
		
	def get_delanteros(self):
		datos = self.get_datos_jugadores()
		return (datos['delanteros'])
		
	def get_dt(self):
		datos = self.get_datos_jugadores()
		return (datos['dt'])
		
	def get_datos_posiciones(self):
		return (self.leer_tablas('posiciones'))
		
	def get_datos_campania(self):
		datos = self.leer_tablas('campania')
		datos_partidos = []
		for partido in datos:
			if ("/" in partido[0]):
				datos_partidos.append(partido)
		return datos_partidos
	def get_datos_particulares_campania(self):
		datos = self.leer_tablas('campania')
		datos_partidos = []
		for partido in datos:
			if (not "/" in partido[0]):
				datos_partidos.append(partido)
		return datos_partidos