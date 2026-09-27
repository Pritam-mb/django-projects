from django.urls import path,include

from .views import get_products,get_catagories

urlpatterns = [
    path('products/',get_products),
    path('catagories/',get_catagories),
]
