# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='campeonato',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('titulo', models.CharField(max_length=200)),
                ('idioma', models.CharField(max_length=30)),
                ('tipo', models.CharField(max_length=30)),
                ('anio', models.CharField(max_length=4)),
                ('info_curiosidades', models.CharField(max_length=1500)),
            ],
        ),
    ]
