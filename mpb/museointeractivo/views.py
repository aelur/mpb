from django.shortcuts import render
from django.http import HttpResponse
from museointeractivo.models import campeonato
# Create your views here.

def index(request,lenguaje=None):
	if lenguaje is None:
		lenguaje = 'es'
	campeonatos = campeonato.objects.order_by('anio')
	context = {'campeonatos' : campeonatos, 'lenguaje': lenguaje}
	return render(request, 'museointeractivo/timeline.html', context)
def datos(request, campeonato_id, lenguaje):
	if lenguaje is None:
		lenguaje = 'es'
	context = {	'campeonato': campeonato.objects.get(pk=campeonato_id), 'lenguaje' : lenguaje }
	return render(request, 'museointeractivo/datos.html', context)
def tablas(request, campeonato_id, tabla_sel, lenguaje):
	if lenguaje is None:
		lenguaje = 'es'
	camp = campeonato.objects.get(pk=campeonato_id)
	context = {	'campeonato': camp, 'tabla_activa' : tabla_sel, 'lenguaje' : lenguaje}
	return render(request, 'museointeractivo/tablas.html', context)