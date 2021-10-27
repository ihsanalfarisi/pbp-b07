from django.shortcuts import render, get_object_or_404
from .models import Artikel
from .forms import ArtikelForm
from django.core import serializers
from django.conf import settings
from django.http.response import HttpResponse
from django.core import serializers
from django.contrib.auth.decorators import login_required

def index(request):
    artikel = Artikel.objects.all() 
    response = {'artikel': artikel}
    return render(request, 'artikel_index.html', response)

@login_required(login_url = settings.LOGIN_URL)
def add_artikel(request):
    form = ArtikelForm(request.POST or None) 
    if (form.is_valid and request.method == 'POST'):
        form.instance.penulis = request.user.username
        form.save()
    return render(request, 'artikel_form.html')

def get_artikel(request, id):
    artikel= serializers.serialize("json",Artikel.objects.filter(id=id))
    return HttpResponse(artikel, content_type="application/json")

def get_artikel2(request, id):
    artikel_detail = get_object_or_404(Artikel, id = id)
    response = {'artikel_detail': artikel_detail}
    return render(request, 'artikel_detail.html', response)

def json(request):
    data = serializers.serialize('json', Artikel.objects.only('judul', 'isi', 'deskripsi', 'penulis', 'date_published'))
    return HttpResponse(data, content_type="application/json")

# values_list('judul', 'isi', 'deskripsi', 'penulis', 'time_published')