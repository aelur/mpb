# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.core.files.storage


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0002_auto_20151022_1106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campeonato',
            name='anio',
            field=models.IntegerField(verbose_name=b'A\xc3\xb1o'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='campania',
            field=models.FileField(help_text=b'Archivo CSV con los datos de los partidos jugados.', upload_to=b'', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), verbose_name=b'Campa\xc3\xb1a'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades',
            field=models.TextField(max_length=1500),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='formacion',
            field=models.FileField(help_text=b'Archivo CSV con los datos del equipo.', upload_to=b'', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), verbose_name=b'Formaci\xc3\xb3n'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='posiciones',
            field=models.FileField(help_text=b'Archivo CSV con los datos de las posiciones del campeonato.', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='titulo',
            field=models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo'),
        ),
    ]
