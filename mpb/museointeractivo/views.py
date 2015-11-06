from django.shortcuts import render
from django.http import HttpResponse
from models import campeonato
# Create your views here.

def index(request):
	campeonatos = campeonato.objects.all()
	context = {'campeonatos' : campeonatos }
	return render(request, 'museointeractivo/timeline.html', context)
def datos(request, campeonato_id):
	context = {	'campeonato': campeonato.objects.get(pk=campeonato_id) }
	return render(request, 'museointeractivo/datos.html', context)
def tablas(request, campeonato_id, tabla_sel):
	camp = campeonato.objects.get(pk=campeonato_id)
	context = {	'campeonato': camp, 'tabla_activa' : tabla_sel}
	return render(request, 'museointeractivo/tablas.html', context)