from django.db import models
from django.contrib.auth.models import User
import pycountry
# Create your models here.

class Country(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="country", null=True)
    country_name = models.CharField(max_length=50)
    code = models.CharField(max_length=3, editable=False)
    code2 = models.CharField(max_length=2, editable=False)

    def save(self, *args, **kwargs):
        country_list = []
        for country in pycountry.countries:
            country_list.append(country.name)
        if (self.country_name in country_list):
            self.code = pycountry.countries.get(name=self.country_name).alpha_3
            self.code2 = pycountry.countries.get(name=self.country_name).alpha_2.lower()
            super(Country, self).save(*args, **kwargs)


    # @property
    # def code(self):
    #     country_list = []
    #     for country in pycountry.countries:
    #         country_list.append(country.name)
    #     if (self.country_name in country_list):
    #         return pycountry.countries.get(self.country_name).alpha_3        


    
    
