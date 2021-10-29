from django.db import models

# Create your models here.
class Hotel(models.Model):
    country = models.CharField(max_length=30)
    nama_hotel = models.CharField(max_length=30)
    # foto = models.ImageField(upload_to='media/', default='static/img/default.jpg', blank=True)
    foto = models.TextField()
    harga = models.CharField(max_length=50) 
    detail = models.TextField()
