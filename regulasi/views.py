from django.shortcuts import redirect, render
from .models import Regulasi
from .forms import CountryForm
from django.contrib.auth.decorators import login_required

# @login_required(login_url = '/login')

# Create your views here.
def index(request):
    regulasi_negara = []
    negara = ["Thailand", "Singapore", "Malaysia"]
    regulasi = Regulasi.objects.all().values()

    for i in regulasi:
        regulasi_negara.append(i['negara'])

    form = CountryForm(request.POST or None) 
    response = {'form': form, 'regulasi': regulasi}
    if (form.is_valid() and request.method == 'POST'):
        if (not form.cleaned_data.get("negara") in regulasi_negara):
            if (form.cleaned_data.get("negara") in negara):
                form.save()
                return redirect(index)
    return render(request, 'regulasi_index.html', response)

def malaysia(request):
    return render(request, 'malaysia.html')

def singapore(request):
    return render(request, 'singapore.html')

def thailand(request):
    return render(request, 'thailand.html')

def delete(request, regulasi_id):
    regulasi = Regulasi.objects.get(pk=regulasi_id)
    regulasi.delete()
    return redirect(index)