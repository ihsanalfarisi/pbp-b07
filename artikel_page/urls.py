from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='Artikel'),
    path('add', add_artikel, name='Tulis Artikel'),
    path('details/<id>', get_artikel, name='Artikel'),
    path('json', json, name='json'),
]