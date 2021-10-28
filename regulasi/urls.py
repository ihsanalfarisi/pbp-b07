from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('malaysia.html/', malaysia, name='malaysia'),
    path('singapore.html/', singapore, name='singapore'),
    path('thailand.html/', thailand, name='thailand'),
    path('delete/<regulasi_id>', delete, name='delete'),
]