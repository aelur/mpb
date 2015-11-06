# -*- encoding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.contrib.auth.models import Group


from .models import campeonato

class campeonatoAdmin(admin.ModelAdmin):

	fieldsets=[
		(None,	{'fields': [('titulo_es', 'titulo_por', 'titulo_en'), ('tipo', 'anio')]}),
		('Imágenes', 
			{'fields': [('imagen_copa','img_copa_thumb'),
						('imagen_fondo','img_fondo_thumb'), 
						('imagen_campo','img_campo_thumb'),
						('imagen_formacion','img_formacion_thumb'),
						]}),
		('Videos', {'fields': [('video1', 'video2', 'video3')]}),
		('Información', 
			{'fields': [('curiosidades_es', 'curiosidades_en', 'curiosidades_por'),'tablas']}),
	]
	list_display = ('titulo_es', 'anio','tipo')
	list_filter = ['tipo','anio']
	readonly_fields = ['img_copa_thumb','img_fondo_thumb','img_campo_thumb','img_formacion_thumb']
	search_fields = ['titulo_es']
	ordering = ['-anio']

	
admin.site.register(campeonato, campeonatoAdmin)
admin.site.unregister(User)
admin.site.unregister(Group)