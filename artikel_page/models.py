from django.db import models
from django.contrib.auth.models import AnonymousUser, User

# Create your models here.
class Artikel(models.Model):
    judul = models.CharField(max_length=30)
    gambar = models.ImageField(upload_to='images/', default='static/image/default.jpg')
    isi = models.TextField()
    deskripsi = models.CharField(max_length=20) #ini bisa ditaro di views buat pengaturannya
    penulis = models.CharField(max_length=30, default=AnonymousUser)
    date_published = models.DateField(auto_now_add=True)