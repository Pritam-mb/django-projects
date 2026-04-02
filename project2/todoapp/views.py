from django.shortcuts import render,redirect
from django.shortcuts import HttpResponse
from todoapp.models import Task

# Create your views here.
def home(request):
    tasks = Task.objects.all()
    return render(request, 'home.html', {'tasks': tasks})

def add_task(request):
    taskl = request.POST['task']
    Task.objects.create(task = taskl)
    return redirect('home')
    # return HttpResponse('the form has been submitted')