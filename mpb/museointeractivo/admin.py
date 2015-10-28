# -*- encoding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.contrib.auth.models import Group


from .models import campeonato

class campeonatoAdmin(admin.ModelAdmin):
	fieldsets=[
		(None,	{'fields': ['titulo', ('tipo', 'anio', 'idioma')]}),
		('Imágenes', {'fields': [('imagen_copa',  'imagen_fondo')]}),
		('Videos', {'fields': [('video1', 'video2', 'video3')]}),
		('Información', {'fields': ['curiosidades','tablas'],
						 'classes': ('wide', 'extrapretty')}),
	]
	list_display = ('titulo', 'anio','tipo')
	list_filter = ['tipo','anio']
	search_fields = ['titulo']
	ordering = ['-anio']

	
admin.site.register(campeonato, campeonatoAdmin)
admin.site.unregister(User)
admin.site.unregister(Group)