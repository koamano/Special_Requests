# Generated by Django 2.2.6 on 2019-11-07 23:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Manager_Engine', '0020_remove_request_hold_until'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='other_store_inventory',
        ),
        migrations.RemoveField(
            model_name='request',
            name='quantity',
        ),
    ]
