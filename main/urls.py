from django.urls import path, include

from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home, name='home'),
    path('signup/', views.register_request, name="signup"),
    path('login/', views.login_request, name="login"),
    path('logout/', views.logout_request, name="logout"),
    path('loginf', views.login_flutter, name="loginf")
]

