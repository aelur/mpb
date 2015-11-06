# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0009_auto_20151104_2353'),
    ]

    operations = [
        migrations.AddField(
            model_name='campeonato',
            name='imagen_formacion',
            field=models.ImageField(default=b'', upload_to=b'', verbose_name=b'Imagen del Equipo'),
        ),
    ]
