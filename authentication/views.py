from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def server(requests):
    return HttpResponse("<h1>Connected.......</h1>")
