# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import museointeractivo.modelvalidators


class Migration(migrations.Migration):

    dependencies = [
        ('museointeractivo', '0006_auto_20151104_1002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_en',
            field=models.FileField(default=b'', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato], upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Ingl\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_es',
            field=models.FileField(default=b'', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato], upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Espa\xc3\xb1ol'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='curiosidades_por',
            field=models.FileField(default=b'', validators=[museointeractivo.modelvalidators.validate_curiosidades(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')])), museointeractivo.modelvalidators.validate_formato], upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Texto de curiosidades - obligatorio si es nacional.', verbose_name=b'Curiosidades - Portugu\xc3\xa9s'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_campo',
            field=models.ImageField(default=b'', validators=[museointeractivo.modelvalidators.validate_campo(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')]))], upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Gr\xc3\xa1fico con formaci\xc3\xb3n del equipo - obligatorio si es Internacional.'),
        ),
        migrations.AlterField(
            model_name='campeonato',
            name='imagen_copa',
            field=models.ImageField(default=b'', validators=[museointeractivo.modelvalidators.validate_copa(models.CharField(default=(b'NAC', b'Nacional'), max_length=15, choices=[(b'NAC', b'Nacional'), (b'INT', b'Internacional')]))], upload_to=b'/home/agustina/mpb/mpb/media', blank=True, help_text=b'Imagen de la copa - obligatorio si es Internacional.'),
        ),
    ]
