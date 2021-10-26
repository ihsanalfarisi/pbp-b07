from django.db import models
import pycountry
# Create your models here.
class Country(models.Model):
    country_name = models.CharField(max_length=50)
    code = models.CharField(max_length=3, editable=False)

    def save(self, *args, **kwargs):
        country_list = []
        for country in pycountry.countries:
            country_list.append(country.name)
        if (self.country_name in country_list):
            self.code = pycountry.countries.get(name=self.country_name).alpha_3
            super(Country, self).save(*args, **kwargs)


    # @property
    # def code(self):
    #     country_list = []
    #     for country in pycountry.countries:
    #         country_list.append(country.name)
    #     if (self.country_name in country_list):
    #         return pycountry.countries.get(self.country_name).alpha_3        


    
    
