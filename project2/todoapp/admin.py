from django.contrib import admin
from . models import Task
class Taskadmin(admin.ModelAdmin):
    list_display = ('task','iscompleted','created_at')
    search_fields=('task',)

admin.site.register(Task,Taskadmin)
# Register your models here.
