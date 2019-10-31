from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'request', views.RequestView, 'request')
router.register(r'history', views.HistoryView, 'history')
router.register(r'notes', views.NotesView, 'notes')

urlpatterns = [
    path('', include(router.urls))
]
