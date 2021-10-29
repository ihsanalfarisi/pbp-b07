from django.urls import path
from .views import index, add_support, support_list

app_name = "support_page"

urlpatterns = [
    path('', index, name='index'),
    path('add_support/', add_support, name='add_support'),
    path('support_list/', support_list, name='support_list'),
]
