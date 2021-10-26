from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    # path('json', json, name='json'),
]