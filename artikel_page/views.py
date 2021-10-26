from django.shortcuts import (get_object_or_404, render, HttpResponseRedirect)
from .models import Artikel
from .forms import ArtikelForm
from django.core import serializers
from django.http import JsonResponse
from django.http.response import HttpResponse
from django.core import serializers
# Create your views here.

def index(request):
    artikel = Artikel.objects.all() 
    response = {'artikel': artikel}
    return render(request, 'artikel_index.html', response)

def add_artikel(request):
    form = ArtikelForm(request.POST or None) 
    if (form.is_valid and request.method == 'POST'):
        form.save()
    return render(request, 'artikel_form.html')

def json(request):
    data = serializers.serialize('json', Artikel.objects.all())
    return HttpResponse(data, content_type="application/json")