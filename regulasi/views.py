from django.shortcuts import render
from .models import Regulasi
from .forms import CountryForm
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    regulasi = Regulasi.objects.all().values()
    response = {'regulasi': regulasi}
    return render(request, 'regulasi_index.html', response)

def pilih_negara(request):
    form = CountryForm(request.POST or None) 
    if (form.is_valid and request.method == 'POST'):
        form.save()
    return render(request, 'regulasi_detail.html')