# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import museointeractivo.modelvalidators


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0005_auto_20151102_2042'),
    ]

    operations = [
        migrations.AddField(
            model_name='campeonato',
            name='imagen_campo',
            field=models.ImageField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', validators=[museointeractivo.modelvalidators.validate_campo(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')]))]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_en',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', verbose_name=b'Curiosidades - Ingl\xc3\xa9s', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_es',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', verbose_name=b'Curiosidades - Espa\xc3\xb1ol', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_por',
            field=models.FileField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', verbose_name=b'Curiosidades - Portugu\xc3\xa9s', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(default=b'', upload_to=b'/home/agustina/mpb/mpb/media', validators=[museointeractivo.modelvalidators.validate_copa(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')]))]),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='titulo_en',
            field=models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Ingl\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='titulo_es',
            field=models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Espa\xc3\xb1ol'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='titulo_por',
            field=models.CharField(max_length=200, verbose_name=b'T\xc3\xadtulo Portugu\xc3\xa9s'),
        ),
    ]
