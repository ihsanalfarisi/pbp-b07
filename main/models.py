from django.db import models

class Fitur(models.Model):
    nama = models.CharField(max_length=30)
    deskripsi = models.TextField()
    icon = models.CharField(max_length=50)
    link = models.CharField(max_length=30)