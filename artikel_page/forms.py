from django import forms
from .models import Artikel

class ArtikelForm(forms.ModelForm):
    class Meta:
      model = Artikel
      fields = "__all__"
    
    error_messages = {
          'required' : 'Please Fill in the Blank'
      }
