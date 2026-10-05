from django.urls import path,include

from .views import get_products,get_catagories,get_product_details,get_cart,add_to_cart,delete_product

urlpatterns = [
    path('products/',get_products),
    path('catagories/',get_catagories),
    path('products/<int:pk>/',get_product_details),
    path('cart/',get_cart),
    path('add-to-cart/',add_to_cart),
    # path('cartitem/',get_cart_item),
    path('delete-product/<int:pk>/',delete_product),
]
