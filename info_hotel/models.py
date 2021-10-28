from django.db import models

# Create your models here.
class Hotel(models.Model):
    country = models.CharField(max_length=30)
    nama_hotel = models.CharField(max_length=30)
    foto = models.ImageField(upload_to='media/', default='static/image/default.jpg', blank=True)
    harga = models.CharField(max_length=50) 
    review = models.TextField()
