# Generated by Django 2.2.6 on 2019-10-24 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manager_Engine', '0009_request_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='status',
            field=models.CharField(default='open', max_length=64),
        ),
        migrations.AlterField(
            model_name='request',
            name='subCategory',
            field=models.CharField(default='none', max_length=64),
        ),
    ]
