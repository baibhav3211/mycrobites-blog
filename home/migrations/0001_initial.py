# Generated by Django 3.0.5 on 2020-12-21 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('img', models.ImageField(upload_to='images/')),
                ('content', models.TextField()),
                ('author', models.CharField(max_length=50)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('slug', models.CharField(max_length=130)),
            ],
        ),
    ]
