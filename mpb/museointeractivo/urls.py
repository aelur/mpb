from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

from museointeractivo import views

urlpatterns = [
    url(r'^(?P<lenguaje>(en|es|por))/$', views.index, name='index'),
    url(r'^$', views.index, name='index'),
    url(r'^datos/(?P<campeonato_id>[0-9]+)/(?P<lenguaje>(es|por|en))/$', views.datos, name='datos'),
    url(r'^tablas/(?P<campeonato_id>[0-9]+)/(?P<tabla_sel>(jugadores|campania|posiciones))/(?P<lenguaje>(es|por|en))/$', views.tablas, name='tablas'),
]  
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)