# Generated by Django 3.0.5 on 2020-12-21 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='date',
            new_name='timeStamp',
        ),
    ]
