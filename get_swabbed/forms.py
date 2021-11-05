from django import forms
from .models import Get_Swabbed

# membuat CountryForm model
class CountryForm(forms.ModelForm):
    class Meta:
        model = Get_Swabbed
        fields = ('country',)
        # fields = "__all__" 