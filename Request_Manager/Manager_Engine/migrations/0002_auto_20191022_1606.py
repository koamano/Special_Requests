# Generated by Django 2.2.6 on 2019-10-22 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manager_Engine', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='id',
        ),
        migrations.AddField(
            model_name='request',
            name='request_id',
            field=models.AutoField(default=9, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]