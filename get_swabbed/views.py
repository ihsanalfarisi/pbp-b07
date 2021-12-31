from django.shortcuts import render, redirect
from django.core import serializers
from django.http.response import HttpResponse
from .models import Get_Swabbed
from .forms import CountryForm
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

# @login_required(login_url = '/login')

# Create your views here.
def index(request):
    form = CountryForm(request.POST or None)
    if (request.method == 'POST' and form.is_valid()):
        form.save()
    country = ["Thailand", "Singapore", "Malaysia"]
    get_swabbed = Get_Swabbed.objects.all().values()
    response = {'get_swabbed':get_swabbed}
    return render(request, 'get_swabbed_index.html', response)


# def countryForm(request):
    
#     return render(request, 'get_swabbed_index.html')

def json(request):
    data = serializers.serialize('json', Get_Swabbed.objects.all())
    return HttpResponse(data, content_type="application/json")

def get_swabbed_detail(request, id):
    data = serialize('json', CountryDetail.objects.filter(CountryName = id))
    return HttpResponse(data, content_type="application/json")

def malaysia(request):
    return render(request, 'swab_malaysia.html')

def singapore(request):
    return render(request, 'swab_singapore.html')

def thailand(request):
    return render(request, 'swab_thailand.html')