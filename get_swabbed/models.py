from django.db import models

# Create your models here.
class Get_Swabbed(models.Model):
    country = models.CharField(max_length=30, default=None)

class CountryDetail(models.Model):
    countryName = models.CharField(max_length=30, default=None)
    swabSpot = models.TextField()
    address = models.TextField()