from django.urls import path,include

from .views import get_products,get_catagories,get_product_details

urlpatterns = [
    path('products/',get_products),
    path('catagories/',get_catagories),
    path('products/<int:pk>/',get_product_details),
]
