from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
from .models import Hotel
# from .forms import HotelForm

# Create your views here.

def index(request):
    hotel = Hotel.objects.all()
    list_hotel = [
        {"country": "Singapore",
         "gambar": "{% static 'img/sg-swissotel.jpg' %}",
         "nama_hotel": "Swissotel the Stamford",
         "harga": "S$3,600/S$5,350/S$9,300",
         "review": "https://www.booking.com/hotel/sg/swissotelsingapore.en.html?aid=1152169&no_rooms=1&group_adults=2&label=SingaporeQuarantineHotels",
         },
        {"country": "Singapore",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Fairmont Singapore",
         "harga": "S$3,600/S$5,350",
         "review": "https://www.booking.com/hotel/sg/fairmont-singapore.en.html?aid=1152169&no_rooms=1&group_adults=2&label=SingaporeQuarantineHotels",
         },
        {"country": "Singapore",
         "gambar": "[GAMBAR]",
         "nama_hotel": "The Regent",
         "harga": "S$5,350/S$9,300/S$14,300",
         "review": "https://www.booking.com/hotel/sg/the-regent-singapore.en.html?aid=1152169&no_rooms=1&group_adults=2&label=SingaporeQuarantineHotels",
         },
        {"country": "Singapore",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Conrad Centennial",
         "harga": "S$3,600/S$9,300",
         "review": "https://www.booking.com/hotel/sg/conrad-centennial-singapore.en.html?aid=1152169&no_rooms=1&group_adults=2&label=SingaporeQuarantineHotels",
         },
        {"country": "Singapore",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Mariott Tang Plaza",
         "harga": "S$3,600",
         "review": "https://www.booking.com/hotel/sg/singapore-marriott.en.html?aid=1152169&no_rooms=1&group_adults=2&label=SingaporeQuarantineHotels",
         },
        
        {"country": "Malaysia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Putrajaya Marriott",
         "harga": "Mulai dari RM 320",
         "review": "https://www.booking.com/hotel/my/putrajaya-marriott.en.html?aid=1152169&no_rooms=1&group_adults=2&label=KLQuarantineHotels",
         },
        {"country": "Malaysia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Swiss Garden Bukit Bintang",
         "harga": "Mulai dari RM 328",
         "review": "https://www.booking.com/hotel/my/02-swiss-garden-1r1b-bukit-bintang-kuala-lumpur.en.html?aid=1152169&no_rooms=1&group_adults=2&label=KLQuarantineHotels",
         },
        {"country": "Malaysia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Impiana Hotel KLCC",
         "harga": "Mulai dari RM 315",
         "review": "https://www.booking.com/hotel/my/impiana-klcc.en.html?aid=1152169&no_rooms=1&group_adults=2&label=KLQuarantineHotels",
         },
        {"country": "Malaysia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "IBIS KLCC",
         "harga": "Mulai dari RM 328",
         "review": "https://www.booking.com/hotel/my/ibis-kuala-lumpur-city-centre.en.html?aid=1152169&no_rooms=1&group_adults=2&label=KLQuarantineHotels",
         },
        {"country": "Malaysia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Grand Millennium KL",
         "harga": "Mulai dari RM 388",
         "review": "https://www.booking.com/hotel/my/grand-millennium-kuala-lumpur.en.html?aid=1152169&no_rooms=1&group_adults=2&label=KLQuarantineHotels",
         },
        
        {"country": "Thailand",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Otw ya...",
         "harga": "-",
         "review": "",
         },

        {"country": "Indonesia",
         "gambar": "[GAMBAR]",
         "nama_hotel": "Otw ya...",
         "harga": "-",
         "review": "",
         },
    ]

    response = {
        'hotel': hotel,
        'list_hotel': list_hotel,
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