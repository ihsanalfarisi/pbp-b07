from django.db import models
from django.contrib.auth.models import AnonymousUser, User
from django.conf import settings

# Create your models here.
class Support(models.Model):
    Negara_yang_dituju = models.CharField(max_length=1024) 
    Lokasi_kejadian = models.CharField(max_length=1024)
    Kejadian_secara_umum = models.CharField(max_length=1024)
    keluhan = models.TextField()
    saran = models.TextField()