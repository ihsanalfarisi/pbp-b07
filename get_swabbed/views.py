from django.shortcuts import render, redirect
from .models import Get_Swabbed
from .forms import CountryForm
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required

@login_required(login_url = '/login')

# Create your views here.
def index(request):
    getSwabbed = []
    country = ["Thailand", "Singapore", "Malaysia"]
    get_swabbed = Get_Swabbed.objects.all().values()
    response = {'get_swabbed':get_swabbed}
    return render(request, 'get_swabbed_index.html', response)


def countryForm(request):
    if request.method == 'POST':
        country = request.POST['country']

    Get_Swabbed.objects.create(
        country = country,
    )
    return render(request, 'get_swabbed_index.html', response)

def malaysia(request):
    return render(request, 'swab_malaysia.html')

def singapore(request):
    return render(request, 'swab_singapore.html')

def thailand(request):
    return render(request, 'swab_thailand.html')