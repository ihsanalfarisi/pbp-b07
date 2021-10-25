from django import forms
from .models import Artikel

class ArtikelForm(forms.ModelForm):
    class Meta:
      model = Artikel
      exclude = ['deskripsi']
    
    error_messages = {
          'required' : 'Please Fill in the Blank'
      }
