from django.shortcuts import render
from django.shortcuts import HttpResponse
from todoapp.models import Task

# Create your views here.
def home(request):
    tasks = Task.objects.filter(iscompleted = False).order_by('-updated_at')
    completed_task = Task.objects.filter(iscompleted = True).order_by('updated_at')
    context ={
        'tasks': tasks,
        'completed_tasks': completed_task
    }
    return render(request, 'home.html', context)