from django.db import models

# Create your models here.
class Regulasi(models.Model):
    negara = models.CharField(max_length=30, default=None)