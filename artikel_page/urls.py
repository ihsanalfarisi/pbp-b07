from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('add', add_artikel, name='tulis-artikel'),
    # path('notes/<id>', get_note, name='note-detail'),
    # path('notes/<id>/delete', delete_note),
    # path('notes/<id>/update', update_note),
    # path('json', json, name='json'),
]