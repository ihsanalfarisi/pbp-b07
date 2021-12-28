from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='Artikel'),
    path('add', add_artikel, name='Tulis Artikel'),
    path('details/<id>', get_artikel, name='Artikel'),
    path('json', json, name='json'),
        #Flutter
    path('get-all-artikel', get_artikel_flutter),
    path('get-detail/<id>', get_detail),
    path('create-artikel', create_artikel_flutter),
]