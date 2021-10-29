from django import forms
from .models import HotelKarantina

class HotelForm(forms.ModelForm):
    class Meta:
        model = HotelKarantina
        fields = ('country',)
