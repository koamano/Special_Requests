# Generated by Django 2.2.6 on 2019-10-30 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Manager_Engine', '0013_auto_20191029_1013'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request',
            name='notes',
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_date', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=8)),
                ('text', models.CharField(max_length=200)),
                ('request', models.ForeignKey(on_delete='PROTECT', related_name='notes', to='Manager_Engine.Request')),
            ],
        ),
    ]
