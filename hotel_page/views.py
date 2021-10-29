from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
from .models import Hotel
from .forms import HotelForm

# Create your views here.

def index(request):
    hotels = Hotel.objects.all()
    # hotel_country = [] 
    # valid_country = ["Singapore", "Malaysia", "Thailand", "Indonesia"] 

    # for i in hotels: # tambahan
    #     hotel_country.append(i['country']) 

    # form = HotelForm(request.POST or None) 
    # response = {'form': form, 'hotels': hotels}
    # if (form.is_valid() and request.method == 'POST'):
    #     if (not form.cleaned_data.get("country") in hotel_country): 
    #         if (form.cleaned_data.get("country") in valid_country): 
    #             form.save()
    #     return HttpResponseRedirect('')

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