from django.shortcuts import render
from django.http import HttpResponse
from models import campeonato
# Create your views here.

def index(request):
	return render(request, 'museointeractivo/index.html')
def timeline(request, tipo):
	campeonatos = campeonato.objects.all()
	context = {'tipo': tipo,'campeonatos' : campeonatos }
	return render(request, 'museointeractivo/timeline.html', context)
def information(request, campeonato_id):
	camp = campeonato.objects.get(pk=campeonato_id)
	context = {	'campeonato': camp }
	return render(request, 'museointeractivo/datos_campeonato.html', context)