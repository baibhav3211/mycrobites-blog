# Generated by Django 3.0.5 on 2021-01-05 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20201221_2051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='timeStamp',
            field=models.DateField(blank=True),
        ),
    ]
