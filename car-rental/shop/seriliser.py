from dataclasses import field
from .models import Product, Catagory, Userprofile, Order, OrderItem, Cart, CartItem
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

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)
    product_price = serializers.DecimalField(source='product.price', max_digits=10, decimal_places=2, read_only=True)
    product_image = serializers.CharField(source='product.image', read_only=True)
    product_slug = serializers.SlugField(source='product.slug', read_only=True)
    class Meta:
        model = CartItem
        # fields = ['id', 'product_name', 'product_price', 'product_image', 'quantity', 'subtotal', 'product_slug']
        fields = '__all__'
class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'