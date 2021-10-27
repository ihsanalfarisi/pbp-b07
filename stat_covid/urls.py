from django.urls import path
from .views import StatCovid, deleteCountry

urlpatterns = [
    path('', StatCovid.as_view(), name='StatCovid'),
    path('delete-country/<country_id>', deleteCountry, name='delete-country')
]