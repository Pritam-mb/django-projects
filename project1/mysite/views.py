from django.http import HttpResponse
from django.shortcuts import render

from employee.models import Employee

def home(request):
    employees = Employee.objects.all()
    print(employees)
    return render(request, 'home.html', {'employees': employees})
    # return HttpResponse("Hello, World! This is the home page.")