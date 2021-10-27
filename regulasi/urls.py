from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('detail', pilih_negara, name='pilih_negara'),
    # path('json', json, name='json'),
]