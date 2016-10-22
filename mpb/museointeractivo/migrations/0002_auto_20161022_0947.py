# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='configuracion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('tiempoEspera', models.IntegerField(default=60, help_text=b'(en segundos)', verbose_name=b'Tiempo de espera')),
                ('urlVideo', models.FileField(upload_to=b'', verbose_name=b'Video a mostrar durante timeouts')),
            ],
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_campo',
            field=models.ImageField(default=b'', upload_to=b'', blank=True, help_text=b'Gr\xc3\xa1fico con formaci\xc3\xb3n del equipo - obligatorio si es Internacional. Resoluci\xc3\xb3n: 600x835', verbose_name=b'Imagen de Posiciones'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(default=b'/static/img/estrella.png', help_text=b'Imagen de la copa - obligatorio. Resoluci\xc3\xb3n: 300x300', upload_to=b''),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_formacion',
            field=models.ImageField(default=b'/static/img/equipo.png', upload_to=b'', verbose_name=b'Imagen del Equipo', blank=True),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='videoArgentina',
            field=models.FileField(help_text=b'Aspect Ratio: 5:4', upload_to=b'', verbose_name=b'Video de la Argentina.', blank=True),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='videoBoca',
            field=models.FileField(help_text=b'Aspect Ratio: 5:4', upload_to=b'', verbose_name=b'Video de Boca.'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='videoMundo',
            field=models.FileField(help_text=b'Aspect Ratio: 5:4', upload_to=b'', verbose_name=b'Video del Mundo.', blank=True),
        ),
    ]
