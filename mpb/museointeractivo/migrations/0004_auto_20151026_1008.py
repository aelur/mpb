# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0003_auto_20151022_1125'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campeonato',
            name='campania',
        ),
        migrations.RemoveField(
            model_name='campeonato',
            name='formacion',
        ),
        migrations.RemoveField(
            model_name='campeonato',
            name='posiciones',
        ),
        migrations.AddField(
            model_name='campeonato',
            name='tablas',
            field=models.FileField(default='          ', help_text=b"Archivo Excel XLSX con informaci\xc3\xb3n de: posiciones del campeonato (pesta\xc3\xb1a 'posiciones'), jugadores (pesta\xc3\xb1a 'jugadores'), y la campa\xc3\xb1a (pesta\xc3\xb1a 'campania').", upload_to=b'/home/agustina/mpb/mpb/media'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_fondo',
            field=models.ImageField(upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video1',
            field=models.FileField(upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video2',
            field=models.FileField(upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='video3',
            field=models.FileField(upload_to=b'/home/agustina/mpb/mpb/media'),
        ),
    ]
