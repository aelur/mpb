# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.core.files.storage


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='campeonato',
            old_name='info_curiosidades',
            new_name='curiosidades',
        ),
        migrations.AddField(
            model_name='campeonato',
            name='campania',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='formacion',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='imagen_fondo',
            field=models.ImageField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='posiciones',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='video1',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='video2',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='campeonato',
            name='video3',
            field=models.FileField(default=' ', storage=django.core.files.storage.FileSystemStorage(location=b'/media/'), upload_to=b''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='anio',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='idioma',
            field=models.CharField(default=(b'ESP', b'Espa\xc3\xb1ol'), max_length=15, choices=[(b'ESP', b'Espa\xc3\xb1ol'), (b'ING', b'Ingl\xc3\xa9s'), (b'POR', b'Portugu\xc3\xa9s')]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='tipo',
            field=models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')]),
        ),
    ]
