from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('malaysia.html/', malaysia, name='malaysia'),
    path('singapore.html/', singapore, name='singapore'),
    path('thailand.html/', thailand, name='thailand'),
    # path('country/input/', countryForm),
    path('json', json),
    # flutter
    path('swab-detail/<id>', get_swabbed_detail),
]