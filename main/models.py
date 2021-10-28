from django.db import models

class Fitur(models.Model):
    nama = models.TextField()
    deskripsi = models.TextField()
    icon = models.TextField()
    link = models.TextField()