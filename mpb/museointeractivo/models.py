# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from xlrd import open_workbook

class campeonato(models.Model):		

	titulo = models.CharField(max_length=200,  verbose_name='Título')
	idioma = models.CharField( max_length=15,
							   choices=(('ESP','Español'),('ING','Inglés'), ('POR','Portugués')), 
							   default=('ESP','Español')
							  )
	tipo = models.CharField( max_length=15,
							 choices=(('NAC','Nacional'),('INT','Internacional')), 
							 default=('NAC','Nacional')
							)
	anio = models.IntegerField( verbose_name='Año')
	imagen_copa = models.ImageField(upload_to=settings.MEDIA_ROOT)
	imagen_fondo = models.ImageField(upload_to=settings.MEDIA_ROOT)
	curiosidades = models.TextField(max_length=1500)
	video1 = models.FileField(upload_to=settings.MEDIA_ROOT)
	video2 = models.FileField(upload_to=settings.MEDIA_ROOT)
	video3 = models.FileField(upload_to=settings.MEDIA_ROOT)
	tablas = models.FileField(upload_to=settings.MEDIA_ROOT, 
			help_text="Archivo Excel XLSX con información de: posiciones del campeonato (pestaña 'posiciones'), "+
							"jugadores (pestaña 'jugadores'), y la campaña (pestaña 'campania').")

	def __str__(self):
		return self.titulo

	def img_copa_thumb(self):
		if self.imagen_copa:
			return u'<img src="%s" width="100px" height="100px"/>' % self.imagen_copa.url
		else:
			return '(Sin imagen)'
	def img_fondo_thumb(self):
		if self.imagen_fondo:
			return u'<img src="%s" width="100px" height="100px" />' % self.imagen_fondo.url
		else:
			return '(Sin imagen)'
	img_copa_thumb.short_description = 'COPA_Thumb'	
	img_copa_thumb.allow_tags = True
	img_fondo_thumb.short_description = 'FONDO_Thumb'	
	img_fondo_thumb.allow_tags = True

	def get_posiciones(self):
		return self.leer_tablas('posiciones')
	def get_campania(self):
		return self.leer_tablas('campania')
	def get_jugadores(self):
		return self.leer_tablas('jugadores')


	def leer_tablas(self, nombre_tabla):
		wb = open_workbook(self.tablas.url)
		for s in wb.sheets():
			if s.name != nombre_tabla:
				continue
			filas = []
			for row in range(s.nrows):
				columnas = []
				for col in range(s.ncols):
					columnas.append(s.cell(row,col).value)
				filas.append(columnas)
			return filas
