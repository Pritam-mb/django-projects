from django.shortcuts import render,redirect,get_object_or_404
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
    
def mark_as_done(request,pk):
    # return HttpResponse(pk)
    task = get_object_or_404(Task,pk=pk)
    task.iscompleted = True
    task.save()
    return redirect('home')


def edit_task(request, pk):
    task = get_object_or_404(Task, pk=pk)

    if request.method == 'POST':
        updated_task = request.POST['task']
        if updated_task:
            task.task = updated_task
            task.save()
            return redirect('home')
    else:
        context ={
            'get_tasks' : task
        } 

    return render(request, 'edit_task.html', context)
def delete_task(request,pk):
    get_task = get_object_or_404(Task,pk=pk)
    get_task.delete()
    return redirect('home')