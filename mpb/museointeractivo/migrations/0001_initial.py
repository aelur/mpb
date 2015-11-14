# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='campeonato',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('titulo_es', models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Espa\xc3\xb1ol')),
                ('titulo_en', models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Ingl\xc3\xa9s')),
                ('titulo_por', models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Portugu\xc3\xa9s')),
                ('tipo', models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])),
                ('anio', models.IntegerField(verbose_name=b'A\xc3\xb1o')),
                ('imagen_copa', models.ImageField(default=b'', help_text=b'Imagen de la copa - obligatorio si es Internacional.', upload_to=b'', blank=True)),
                ('imagen_fondo', models.ImageField(upload_to=b'')),
                ('imagen_campo', models.ImageField(default=b'', upload_to=b'', blank=True, help_text=b'Gr\xc3\xa1fico con formaci\xc3\xb3n del equipo - obligatorio si es Internacional.', verbose_name=b'Imagen de Posiciones')),
                ('imagen_formacion', models.ImageField(default=b'', upload_to=b'', verbose_name=b'Imagen del Equipo')),
                ('curiosidades_es', models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Espa\xc3\xb1ol')),
                ('curiosidades_en', models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Ingl\xc3\xa9s')),
                ('curiosidades_por', models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Portugu\xc3\xa9s')),
                ('videoBoca', models.FileField(upload_to=b'', verbose_name=b'Video de Boca')),
                ('videoMundo', models.FileField(upload_to=b'', verbose_name=b'Video del Mundo', blank=True)),
                ('videoArgentina', models.FileField(upload_to=b'', verbose_name=b'Video de la Argentina', blank=True)),
                ('tablas', models.FileField(help_text=b"Archivo Excel XLSX con informaci\xc3\xb3n de: posiciones del campeonato (pesta\xc3\xb1a 'posiciones'), jugadores (pesta\xc3\xb1a 'jugadores'), y la campa\xc3\xb1a (pesta\xc3\xb1a 'campania').", upload_to=b'')),
            ],
        ),
    ]
