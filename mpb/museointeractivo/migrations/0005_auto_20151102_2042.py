# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0004_auto_20151026_1008'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campeonato',
            name='curiosidades',
        ),
        migrations.RemoveField(
            model_name='campeonato',
            name='idioma',
        ),
        migrations.RemoveField(
            model_name='campeonato',
            name='titulo',
        ),
        migrations.AddField(
            model_name='campeonato',
            name='curiosidades_en',
            field=models.FileField(default=' ', upload_to=b'/home/agustina/mpb/mpb/media'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='curiosidades_es',
            field=models.FileField(default=' ', upload_to=b'/home/agustina/mpb/mpb/media'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='curiosidades_por',
            field=models.FileField(default=' ', upload_to=b'/home/agustina/mpb/mpb/media'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='titulo_en',
            field=models.CharField(default=' ', max_length=200, verbose_name=b'T\xc3\xadtulo - Ingl\xc3\xa9s'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='titulo_es',
            field=models.CharField(default=' ', max_length=200, verbose_name=b'T\xc3\xadtulo - Espa\xc3\xb1ol'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='titulo_por',
            field=models.CharField(default=' ', max_length=200, verbose_name=b'T\xc3\xadtulo - Portugu\xc3\xa9s'),
            preserve_default=False,
        ),
    ]
