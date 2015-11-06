from django.core.exceptions import ValidationError
from xlrd import open_workbook
from django.utils.deconstruct import deconstructible


@deconstructible
class validate_copa(object):
	def __init__(self, tipo):
		self.tipo = tipo
	def __call__(self,value):
		if self.tipo=='Internacional' and (value=='' or value==None):
			raise ValidationError('Para los campeonatos internacionales es necesario subir una imagen de copa.')

@deconstructible
class validate_campo(object):
	def __init__(self, tipo):
		self.tipo = tipo
	def __call__(self,value):
		if tipo=='Internacional' and  (value=='' or value==None):
			raise ValidationError('Para los campeonatos internacionales es necesario subir una imagen de campo.')

def validate_formato(value):
	wb = open_workbook(value)
	hojas =  wb.sheets()
	hay_datos = 'posiciones' in hojas and 'jugadores' in hojas and 'campania' in hojas
	if not hay_datos:
		raise ValidationError('El excel no tiene definido la hoja de jugadores, o campania o posiciones.')
	## todo validate headers

@deconstructible
class validate_curiosidades(object):	
	def __init__(self, tipo):
		self.tipo = tipo
	def __call__(self,value):
		if tipo=='Nacional' and (value=='' or value==None):
			raise ValidationError('Para los campeonatos nacionales es necesario subir documentos de curiosidades.')
