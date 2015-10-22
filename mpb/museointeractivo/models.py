# -*- encoding: utf-8 -*-
from django.db import models
from django.core.files.storage import FileSystemStorage
import hashlib


fs = FileSystemStorage(location='/media/')

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
	imagen_copa = models.ImageField(storage=fs)
	imagen_fondo = models.ImageField(storage=fs)
	curiosidades = models.TextField(max_length=1500)
	video1 = models.FileField(storage=fs)
	video2 = models.FileField(storage=fs)
	video3 = models.FileField(storage=fs)
	posiciones = models.FileField(storage=fs, help_text="Archivo CSV con los datos de las posiciones del campeonato.")
	formacion = models.FileField(storage=fs,  verbose_name='Formación', help_text="Archivo CSV con los datos del equipo.")
	campania = models.FileField(storage=fs,  verbose_name='Campaña', help_text="Archivo CSV con los datos de los partidos jugados.")
	def __str__(self):
		return self.titulo
