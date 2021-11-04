from django import forms
from .models import HotelKarantina

class HotelForm(forms.ModelForm):
    class Meta:
        model = HotelKarantina
        fields = ('country',)
        widgets = {
            'country': forms.TextInput(attrs={
                'class': 'form-control', 
                'id':'inputCountry',
                'placeholder':'Ketik untuk mencari' 
            })
        }