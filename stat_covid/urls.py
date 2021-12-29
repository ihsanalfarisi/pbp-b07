from django.urls import path
from .views import StatCovid, deleteCountry, addCountry, getCountries

urlpatterns = [
    path('', StatCovid.as_view(), name='StatCovid'),
    path('delete-country/<country_id>', deleteCountry, name='delete-country'),
    path('add-country/<user_id>/<country_name>', addCountry, name='add-country'),
    path('get-country/<user_id>', getCountries, name='get-country'),
]