# Generated by Django 3.2.8 on 2021-10-29 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HotelKarantina',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=30)),
                ('nama_hotel', models.CharField(max_length=30)),
                ('foto', models.TextField()),
                ('harga', models.CharField(max_length=50)),
                ('detail', models.TextField()),
            ],
        ),
    ]