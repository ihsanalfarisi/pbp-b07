# Generated by Django 3.2.8 on 2021-10-27 20:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('info_hotel', '0002_auto_20211028_0312'),
    ]

    operations = [
        migrations.RenameField(
            model_name='hotel',
            old_name='namaHotel',
            new_name='nama_hotel',
        ),
    ]