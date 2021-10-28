from django.shortcuts import redirect, render
from .models import Regulasi
from .forms import CountryForm
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    regulasi = Regulasi.objects.all().values()
    form = CountryForm(request.POST or None) 
    response = {'form': form, 'regulasi': regulasi}
    if (form.is_valid and request.method == 'POST'):
        form.save()
        # return HttpResponseRedirect('detail')
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