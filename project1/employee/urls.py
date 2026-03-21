from django.urls import path
from . import views

urlpatterns = [
    path('', views.employee_list, name='employee_list'),  # Handles /employee/
    path('<int:pk>/', views.employee_details, name='employee_details'), # Handles /employee/1/
]