from django.shortcuts import render, get_object_or_404
from .models import Artikel
from .forms import ArtikelForm
from django.core import serializers
from django.conf import settings
from django.http.response import HttpResponse
from django.http.response import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json as js

def index(request):
    artikel = Artikel.objects.all() 
    response = {'artikel': artikel}
    return render(request, 'artikel_index.html', response)

@login_required(login_url = settings.LOGIN_URL)
def add_artikel(request):
    if (request.method == "POST"):
        form = ArtikelForm(request.POST or None, request.FILES) 
        if (form.is_valid()):
            form.instance.penulis = request.user.username
            form.save()
    return render(request, 'artikel_form.html')

def get_artikel(request, id):
    artikel_detail = get_object_or_404(Artikel, id = id)
    response = {'artikel_detail': artikel_detail}
    return render(request, 'artikel_detail.html', response)

def json(request):
    data = serializers.serialize('json', Artikel.objects.only('judul', 'isi', 'deskripsi', 'penulis', 'date_published')) #kyknya bisa dijadiin all gitu
    return HttpResponse(data, content_type="application/json")

def get_artikel_flutter(request):
    data = serializers.serialize('json', Artikel.objects.all()) #kyknya bisa dijadiin all gitu
    return HttpResponse(data, content_type="application/json")

def get_detail(request, id):
    data = serializers.serialize('json', Artikel.objects.filter(id = id))
    return HttpResponse(data, content_type="application/json")

@csrf_exempt
def create_artikel_flutter(request):
    if request.method == 'POST':
        newData = js.loads(request.body)

        get_penulis = request.user.username
        if(get_penulis == ""):
            get_penulis = "anonim"

        new_artikel = Artikel(
            judul = newData['judul'],
            gambar = newData['gambar'],
            deskripsi = newData['deskripsi'],
            isi = newData['isi'],
            penulis = get_penulis,
        )

        new_artikel.save()
        return JsonResponse({"instance": "Artikel Disimpan"}, status=200)
