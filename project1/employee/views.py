from django.shortcuts import render, get_object_or_404
from . import models

# Create your views here.
def employee_list(request):
    employees = models.Employee.objects.all()

    # Calculate unique departments count
    unique_departments = employees.values_list('department', flat=True).distinct().count()

    # Calculate average salary
    avg_salary = 0
    if employees.exists():
        total_salary = sum(emp.salary for emp in employees)
        avg_salary = total_salary / employees.count()

    context = {
        'employees': employees,
        'department_count': unique_departments,
        'avg_salary': avg_salary,
    }
    return render(request, 'employee_list.html', context)

def employee_details(request,pk):
    try:
        # employee = models.Employee.objects.get(pk=pk)
        employee = get_object_or_404(models.Employee, pk=pk)
 
        return render(request, 'employee_details.html', {'employee': employee})
    except models.Employee.DoesNotExist:
        return render(request, 'employee_details.html', {'error': 'Employee not found'})