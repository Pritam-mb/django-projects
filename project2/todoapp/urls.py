from django.urls import path
from . import views

urlpatterns = [
   # Handles home page with task list
    # path('', views.home, name='home'), 

    path('addtask/',views.add_task, name='add_task')
]