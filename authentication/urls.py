from django.urls import path
from .views import server
urlpatterns = [
        path('server', server)
]
