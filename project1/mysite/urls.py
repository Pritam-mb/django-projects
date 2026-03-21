"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static

# from project1.mysite import views
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home),
    path('employee/',include('employee.urls')),# when we hit employee/ it will look for urls.py in employee app and then it will look for views.py in employee app
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
