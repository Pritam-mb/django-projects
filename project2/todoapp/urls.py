from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Handles home page with task list
]