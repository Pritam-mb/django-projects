from django.shortcuts import render
from django.shortcuts import HttpResponse
from todoapp.models import Task

# Create your views here.
def home(request):
    tasks = Task.objects.filter(iscompleted = False).order_by('-updated_at')
    return render(request, 'home.html', {'tasks': tasks})