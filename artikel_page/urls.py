from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='Artikel'),
    path('add', add_artikel, name='Tulis Artikel'),
    path('details/<id>', get_artikel, name='Artikel'),
    # path('notes/<id>', get_note, name='note-detail'),
    # path('notes/<id>/delete', delete_note),
    # path('notes/<id>/update', update_note),
    path('json', json, name='json'),
]