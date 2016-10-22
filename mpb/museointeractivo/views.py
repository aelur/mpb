from django.shortcuts import render
from django.http import HttpResponse
from museointeractivo.models import campeonato
from museointeractivo.models import configuracion
# Create your views here.

def index(request,lenguaje=None):
	if lenguaje is None:
		lenguaje = 'es'
	campeonatos = campeonato.objects.order_by('anio')
	conf = configuracion.objects.first
	context = {'campeonatos' : campeonatos, 'lenguaje': lenguaje,'configuracion' : conf}
	return render(request, 'museointeractivo/timeline.html', context)
def datos(request, campeonato_id, lenguaje):
	if lenguaje is None:
		lenguaje = 'es'
	conf = configuracion.objects.first
	context = {	'campeonato': campeonato.objects.get(pk=campeonato_id), 'lenguaje' : lenguaje,'configuracion' : conf }
	return render(request, 'museointeractivo/datos.html', context)
def tablas(request, campeonato_id, tabla_sel, lenguaje):
	if lenguaje is None:
		lenguaje = 'es'
	camp = campeonato.objects.get(pk=campeonato_id)
	conf = configuracion.objects.first
	context = {	'campeonato': camp, 'tabla_activa' : tabla_sel, 'lenguaje' : lenguaje,'configuracion' : conf}
	return render(request, 'museointeractivo/tablas.html', context)
def wait(request):
	conf = configuracion.objects.all()[:1].get()
	context = {'configuracion' : conf}
	return render(request, 'museointeractivo/wait.html',context)