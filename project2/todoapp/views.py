from django.shortcuts import render
from todoapp.models import Task

# Create your views here.
def home(request):
    tasks = Task.objects.all()
    return render(request, 'home.html', {'tasks': tasks})