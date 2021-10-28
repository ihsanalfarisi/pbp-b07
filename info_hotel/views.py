from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
from .models import Hotel
# from .forms import HotelForm

# Create your views here.

def index(request):
    hotels = Hotel.objects.all()
    response = {
        'hotels': hotels,
    }

    if request.method == 'POST':
        response['Country'] = request.POST['myCountry']
        print(response['Country'])
    return render(request, 'hotel_index.html', response)


# def search_hotel(request):
#     form = HotelForm(request.POST or None) 
#     if (form.is_valid and request.method == 'POST'):
#         form.save()
#     return render(request, 'hotel_form.html')