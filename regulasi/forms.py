from .models import Regulasi
from django import forms

# membuat CountryForm model
class CountryForm(forms.ModelForm):
    class Meta:
        model = Regulasi
        fields = ('negara',)
