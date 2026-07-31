from django.contrib import admin
from .models import Product, Catagory, Userprofile, Order, OrderItem

admin.site.register(Product)
admin.site.register(Catagory)
admin.site.register(Userprofile)
admin.site.register(Order)
admin.site.register(OrderItem)
# Register your models here.
