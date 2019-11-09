# Generated by Django 2.2.6 on 2019-11-07 23:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manager_Engine', '0015_request_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='hold_until',
            field=models.DateTimeField(blank=True, default='', null=True),
        ),
        migrations.AddField(
            model_name='request',
            name='other_store_inventory',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='request',
            name='quantity',
            field=models.CharField(blank=True, max_length=12),
        ),
        migrations.AlterField(
            model_name='history',
            name='author',
            field=models.CharField(default='admin', max_length=8),
        ),
    ]
