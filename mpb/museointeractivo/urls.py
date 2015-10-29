from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^information/(?P<campeonato_id>[0-9]+)/$', views.information, name='information'),
]