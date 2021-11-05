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

def json(request):
    data = serializers.serialize('json', HotelKarantina.objects.only('country', 'nama_hotel', 'foto', 'harga', 'detail'))
    return HttpResponse(data, content_type="application/json")