# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0008_auto_20151104_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_en',
            field=models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Ingl\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_es',
            field=models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Espa\xc3\xb1ol'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_por',
            field=models.FileField(default=b'', upload_to=b'', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Portugu\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_campo',
            field=models.ImageField(default=b'', help_text=b'Gr\xc3\xa1fico con formaci\xc3\xb3n del equipo - obligatorio si es Internacional.', upload_to=b'', blank=True),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(default=b'', help_text=b'Imagen de la copa - obligatorio si es Internacional.', upload_to=b'', blank=True),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_fondo',
            field=models.ImageField(upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='tablas',
            field=models.FileField(help_text=b"Archivo Excel XLSX con informaci\xc3\xb3n de: posiciones del campeonato (pesta\xc3\xb1a 'posiciones'), jugadores (pesta\xc3\xb1a 'jugadores'), y la campa\xc3\xb1a (pesta\xc3\xb1a 'campania').", upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video1',
            field=models.FileField(upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video2',
            field=models.FileField(upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video3',
            field=models.FileField(upload_to=b''),
        ),
    ]
