from django.urls import path
from .views import StatCovid

urlpatterns = [
    path('', StatCovid.as_view(), name='StatCovid'),
]