from django.db import models
from django.contrib.auth.models import AnonymousUser, User
from django.conf import settings

# Create your models here.
class Support(models.Model):
    support_to = models.CharField(max_length=1024) 
    negara_detail = models.CharField(max_length=1024)
    support_dari = models.CharField(max_length=1024)
    title = models.CharField(max_length=1024)
    keluhan = models.TextField()
    saran = models.TextField()