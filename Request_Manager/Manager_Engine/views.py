from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializers import RequestSerializer, HistorySerializer, NotesSerializer
from .models import Request, History, Notes
# Create your views here.


class RequestView(viewsets.ModelViewSet):
    serializer_class = RequestSerializer
    queryset = Request.objects.all()


class HistoryView(viewsets.ModelViewSet):
    serializer_class = HistorySerializer

    def get_queryset(self):
        requestId = self.request.query_params.get('requestid', None)
        if requestId is not None:
            return History.objects.filter(request=requestId)


class NotesView(viewsets.ModelViewSet):
    serializer_class = NotesSerializer

    def get_queryset(self):
        requestId = self.request.query_params.get('requestid', None)
        if requestId is not None:
            return Notes.objects.filter(request=requestId)
