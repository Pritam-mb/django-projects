from .models import Product, Catagory, Userprofile, Order, OrderItem
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class CatagorySerializer(serializers.ModelSerializer):
    catagory = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Catagory
        fields = '__all__'
