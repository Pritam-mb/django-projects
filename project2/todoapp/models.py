from django.db import models

# Create your models here.
class task(models.Mode):
    task = models.CharField(max_length=250)
    iscompleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    