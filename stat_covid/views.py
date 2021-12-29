import json
from django.http.response import HttpResponse, JsonResponse
from django.core import serializers
from django.shortcuts import redirect, render
from django.views.generic import View
from .models import Country
from .forms import CountryForm
from django.views.decorators.csrf import csrf_exempt
import pycountry
import math

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

# Create your views here.
class StatCovid(View):
    # Dijalankan saat ada request GET
    def get(self, request):
        form = CountryForm()
        countries = Country.objects.all()
        
        # ----------------------------------

        country_list = []
        country_list_1 = []
        country_list_2 = []
        country_list_3 = []
        country_list_4 = []
        for country in pycountry.countries:
            country_list.append(country.name)
        stop_1 = math.ceil(len(country_list)/4)
        stop_2 = 2 * stop_1
        stop_3 = 3 * stop_1
        stop_4 = len(country_list)
        # Membagi country_menjadi 4
        for i in range(stop_1):
            country_list_1.append(country_list[i])
        for i in range(stop_1, stop_2):
            country_list_2.append(country_list[i])
        for i in range(stop_2, stop_3):
            country_list_3.append(country_list[i])
        for i in range(stop_3, stop_4):
            country_list_4.append(country_list[i])
        
        # ----------------------------------
        
        response = {
            'countries':countries, 
            'form':form, 
            'country_list_1':country_list_1,
            'country_list_2':country_list_2,
            'country_list_3':country_list_3,
            'country_list_4':country_list_4,
            }
        return render(request, 'index.html', response)

    # Dijalankan saat ada request POST
    def post(self, request):
        form = CountryForm(request.POST or None)

        country_list = []
        for country in pycountry.countries:
            country_list.append(country.name)

        if (request.method == "POST" and form.is_valid()):
            n = form.cleaned_data["country_name"]
            # Yang dimasukkan terdapat didalam module pycountry
            if (n in country_list):
                c = Country(country_name=n)
                c.save()
                request.user.country.add(c)
    
        return redirect('StatCovid')

# Untuk menghapus negara
def deleteCountry(request, country_id):
    country = Country.objects.get(pk=country_id)
    country.delete()
    return redirect('StatCovid')

def addCountry(request, user_id, country_name):
    country = Country(country_name=country_name)
    country.save()
    user = User.objects.get(pk=user_id)
    user.country.add(country)

    data = serializers.serialize('json', Country.objects.filter(pk=country.pk))
    return HttpResponse(data, content_type="application/json")

def getCountries(request, user_id):
    print(request.user)
    data = serializers.serialize('json', Country.objects.filter(user=user_id))

    return HttpResponse(data, content_type="application/json")   

