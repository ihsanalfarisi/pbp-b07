from .models import Regulasi
from django import forms

# membuat NoteForm model
class CountryForm(forms.ModelForm):
    # semua field yg dimiliki friend dijadiin form
    class Meta:
        model = Regulasi
        fields = "__all__"
