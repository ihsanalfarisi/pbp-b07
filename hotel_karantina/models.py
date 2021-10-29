from django.db import models

class HotelKarantina(models.Model):
    country = models.CharField(max_length=30)
    nama_hotel = models.CharField(max_length=30)
    foto = models.TextField()
    harga = models.CharField(max_length=50) 
    detail = models.TextField()