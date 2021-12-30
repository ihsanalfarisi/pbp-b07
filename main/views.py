import json
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import Fitur, Ulasan
from django.views.decorators.csrf import csrf_exempt

from .forms import NewUserForm

def home(request):
    fitur = Fitur.objects.all()
    ulasan = Ulasan.objects.all()
    response = {'fitur' : fitur, 'ulasan' : ulasan}
    return render(request, 'main/home.html', response)

def register_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registrasi berhasil.")
            return redirect("main:home")
        messages.error(request, "Registrasi mengalami kegagalan. Terdapat informasi yang tidak valid.")
    form = NewUserForm()
    return render (request=request, template_name="registration/signup.html", context={"register_form":form})

def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"Anda berhasil masuk sebagai {username}.")
                return redirect("main:home")
            else:
                messages.error(request,"Username atau password tidak valid.")
        else:
            messages.error(request,"Username atau password tidak valid.")
    form = AuthenticationForm()
    return render(request=request, template_name="registration/login.html", context={"login_form":form})

def logout_request(request):
    logout(request)
    messages.info(request, "Anda berhasil keluar.")
    return redirect("main:home")

@csrf_exempt
def login_flutter(request):
    # username = request.get("username")
    # password = request.get("password")
    print(request.method)
    # print(request.GET)
    print(request.body)
    data = json.loads(request.body)
    username = data["username"]
    password = data["password"]
    print(f"{username} n {password}")
    user = authenticate(username=username, password=password)
    print(user)
    if user is not None:
        print("Hore")
        return JsonResponse({"status": "logged in", "username":username, "email":user.email, "userID":request.user.pk})
    else:
        print("Sad")
        return JsonResponse({"out": "no"})
