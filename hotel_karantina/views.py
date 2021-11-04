from django.contrib.auth.decorators import login_required
from django.http.response import HttpResponse
from django.shortcuts import (get_object_or_404, redirect, render, HttpResponseRedirect)
from django.core import serializers
from .models import HotelKarantina
# from .forms import HotelForm

# Create your views here.
def index(request):
    hotels = HotelKarantina.objects.all()
    response = {
        'hotels': hotels,
    }

    if request.method == 'POST':
        response['Country'] = request.POST['myCountry']
        print(response['Country'])
    return render(request, 'hotel_index.html', response)

# def index2(request):
#     hotel_country = [] 
#     valid_country = ["Singapore", "Malaysia", "Thailand", "Indonesia"] 
#     hotels = HotelKarantina.objects.all()

#     for i in hotels:
#         hotel_country.append(i['country']) 

#     form = HotelForm(request.POST or None) 
#     response = {'form': form, 'hotels': hotels}
#     if (form.is_valid() and request.method == 'POST'):
#         if (not form.cleaned_data.get("country") in hotel_country): 
#             if (form.cleaned_data.get("country") in valid_country): 
#                 form.save()
#                 return redirect(index)
#     return render(request, 'hotel_index.html', response)

def json(request):
    data = serializers.serialize('json', HotelKarantina.objects.only('country', 'nama_hotel', 'foto', 'harga', 'detail'))
    return HttpResponse(data, content_type="application/json")