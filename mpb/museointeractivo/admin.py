# -*- encoding: utf-8 -*-
from django.contrib import admin

from .models import campeonato

class campeonatoAdmin(admin.ModelAdmin):
	fieldsets=[
		(None,	{'fields': ['titulo', ('tipo', 'anio', 'idioma')]}),
		('Imágenes', {'fields': [('imagen_copa', 'imagen_fondo')]}),
		('Videos', {'fields': [('video1', 'video2', 'video3')]}),
		('Información', {'fields': ['curiosidades', ('posiciones', 'formacion', 'campania')],
						 'classes': ('wide', 'extrapretty')}),
	]
	list_display = ('titulo', 'anio','tipo')
	list_filter = ['tipo','anio']
	search_fields = ['titulo']
	ordering = ['-anio']
	
admin.site.register(campeonato, campeonatoAdmin)