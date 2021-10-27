from django.db import models

# Create your models here.
class Hotel(models.Model):
    country = models.CharField(max_length=30)
    namaHotel = models.CharField(max_length=30)
    # gambar = models.ImageField() 
    harga = models.CharField(max_length=20) 
    review = models.TextField()
