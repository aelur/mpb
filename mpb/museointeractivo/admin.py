# -*- encoding: utf-8 -*-
from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.core.exceptions import ValidationError
from django.contrib.auth.models import Group
from django import forms
import xlrd

from museointeractivo.models import campeonato

def extensionEsInvalida(nombre, ext):
	tam = len(ext)
	nombre = unicode(nombre)
	return (nombre[-tam:].upper() != ext.upper())

def validarExcel(excel, err):
	wb = xlrd.open_workbook(file_contents=excel.read())
	hojas =  wb.sheet_names()
	hay_datos = 'jugadores' in hojas and 'campania' in hojas
	hay_posiciones = 'posiciones' in hojas
	if not hay_datos:
		err.append('El excel no tiene definido la hoja de jugadores, o campania.')
	
	sjug = wb.sheet_by_name('jugadores')
	try:
		if (sjug.cell(0,0).value.upper() != 'JUGADOR' or
			sjug.cell(0,1).value.upper() != 'PARTIDOS' or
			sjug.cell(0,2).value.upper() != 'GOLES' or
			sjug.cell(0,3).value.upper() != 'POSICION'):
			err.append('La planilla de Jugadores no tiene las columnas correctas (jugador,partidos,goles,posicion).')
		scamp = wb.sheet_by_name('campania')
		if (scamp.cell(0,0).value.upper() != 'DIA' or
			scamp.cell(0,1).value.upper() != 'JORNADA' or
			scamp.cell(0,2).value.upper() != 'RIVAL' or
			scamp.cell(0,3).value.upper() != 'RESULTADO' or
			scamp.cell(0,4).value.upper() != 'CANCHA' or
			scamp.cell(0,5).value.upper() != 'OBSERVACIONES'):
			err.append('La planilla de Campania no tiene las columnas correctas (dia,jornada,rival,resultado,cancha, observaciones).')
		if (hay_posiciones):
			spos = wb.sheet_by_name('posiciones')
			if (spos.cell(0,0).value.upper() != 'EQUIPOS' or
				spos.cell(0,1).value.upper() != 'PTOS.' or
				spos.cell(0,2).value.upper() != 'J.' or
				spos.cell(0,3).value.upper() != 'G.' or
				spos.cell(0,4).value.upper() != 'E.' or
				spos.cell(0,5).value.upper() != 'P.' or
				spos.cell(0,6).value.upper() != 'GF.'or
				spos.cell(0,7).value.upper() != 'GC.' or
				spos.cell(0,8).value.upper() != 'OBSERVACIONES'):
				err.append('La planilla de Posiciones no tiene las columnas correctas (equipos,ptos.,j.,g.,e.,p.,gf.,gc., observaciones).')
	except Exception,e:
		print str(e)
		err.append('No se ha podido leer el archivo Excel. Revisar que tenga todas las columnas correspondientes.')

class campeonatoForm(forms.ModelForm):
	class Meta:
		model = campeonato
		fields = '__all__'
	def clean(self):
		cleaned_data = super(campeonatoForm, self).clean()
		tipo = cleaned_data.get('tipo')
		err=[]
		#raise forms.ValidationError(self.cleaned_data['curiosidades_es'].name)
		if (tipo=='INT'):
			if (self.cleaned_data['imagen_copa'] is None):
				err.append('Para los campeonatos internacionales es necesario subir una imagen de copa')
			
			if (self.cleaned_data['imagen_formacion'] is None):
				err.append('Para los campeonatos internacionales es necesario subir una imagen de la formacion del equipo.')

			if (self.cleaned_data['imagen_campo'] is None):
				err.append('Para los campeonatos internacionales es necesario subir una imagen de campo.')
		else:
			cur_es = self.cleaned_data['curiosidades_es']
			cur_por = self.cleaned_data['curiosidades_por']
			cur_en = self.cleaned_data['curiosidades_en']
			if (cur_es is None or cur_por is None or cur_en is None):
				err.append('Para los campeonatos nacionales es necesario subir documentos de curiosidades.')
			else:
				if (extensionEsInvalida(cur_es, 'txt') or extensionEsInvalida(cur_en, 'txt') or extensionEsInvalida(cur_por, 'txt')):
					err.append('El documento de curiosidades debe estar en formato TXT.')
		
		excel = self.cleaned_data['tablas']
		if (extensionEsInvalida(excel.name,'xlsx')):
			err.append('El excel con las tablas debe tener la extension XLSX.')
		validarExcel(excel, err)

		videoBoca = self.cleaned_data['videoBoca']
		videoMundo = self.cleaned_data['videoMundo']
		videoArgentina = self.cleaned_data['videoArgentina']
		if (extensionEsInvalida(videoBoca.name,'mp4') or
			(videoMundo and extensionEsInvalida(videoMundo.name,'mp4') ) or
			(videoArgentina and extensionEsInvalida(videoArgentina.name,'mp4') ) ):
			err.append('Los videos deben tener la extension mp4.')

		if err:
			raise forms.ValidationError(err)

		return self.cleaned_data


class campeonatoAdmin(admin.ModelAdmin):
	form = campeonatoForm
	fieldsets=[
		(None,	{'fields': [('titulo_es', 'titulo_por', 'titulo_en'), ('tipo', 'anio')]}),
		('Imágenes', 
			{'fields': [('imagen_copa','img_copa_thumb'),
						('imagen_fondo','img_fondo_thumb'), 
						('imagen_campo','img_campo_thumb'),
						('imagen_formacion','img_formacion_thumb'),
						]}),
		('Videos', {'fields': [('videoBoca', 'videoMundo', 'videoArgentina')]}),
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