from django.db import models

# Create your models here.
class Artikel(models.Model):
    judul = models.CharField(max_length=30)
    # foto = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100) #belum lengkap
    isi = models.TextField()
    deskripsi = models.CharField(max_length=20) #ini bisa ditaro di views buat pengaturannya
    # penulis = models.CharField(max_length=30)
    # time_modified = models.TimeField(auto_now_add=True)