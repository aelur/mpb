# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0010_campeonato_imagen_formacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_en',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Ingl\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_es',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Espa\xc3\xb1ol'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_por',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Portugu\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='tablas',
            field=models.FileField(help_text=b"Archivo Excel XLSX con informaci\xc3\xb3n de: posiciones del campeonato (pesta\xc3\xb1a 'posiciones'), jugadores (pesta\xc3\xb1a 'jugadores'), y la campa\xc3\xb1a (pesta\xc3\xb1a 'campania').", upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
    ]
