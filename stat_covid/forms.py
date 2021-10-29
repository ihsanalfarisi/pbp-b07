from django import forms
from django.forms import fields, widgets
from .models import Country


class CountryForm(forms.ModelForm):
    class Meta:
        model = Country
        fields = ['country_name']

        widgets = {
            'country_name': forms.TextInput(attrs={
                'class': 'form-control', 
                'id':'inputCountry',
                'placeholder':'Search' 
            })
        }