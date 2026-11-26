from django.shortcuts import render
from django.http import JsonResponse
from .models import Product,Catagory, Cart, CartItem
from .seriliser import ProductSerializer,CatagorySerializer, CartSerializer, CartItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_catagories(request):
    catagories = Catagory.objects.all()
    serializer = CatagorySerializer(catagories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product_details(request,pk):
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product,context={'request':request})
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({"detail": "Product not found"}, status=status.HTTP_404_NOT_FOUND)
@api_view(['GET'])
def get_cart(request):
    if not request.session.session_key:
        request.session.create()
    cart, created = Cart.objects.get_or_create(session_key=request.session.session_key)
    serializer = CartSerializer(cart)
    return Response(serializer.data)

@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    quantity = int(request.data.get('quantity', 1))
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({"detail": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    if not request.session.session_key:
        request.session.create()
    cart, _ = Cart.objects.get_or_create(session_key=request.session.session_key)
    item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
        defaults={'quantity': quantity, 'price': product.price, 'subtotal': product.price * quantity},
    )
    if not created:
        item.quantity += quantity
        item.subtotal = item.price * item.quantity
        item.save()
    return Response(CartItemSerializer(item).data)

@api_view(['POST'])
def delete_product(request,pk):
    try:
        Product.objects.filter(id=pk).delete()
        return Response({"detail": "Product deleted"}, status=status.HTTP_200_OK)
    except Product.DoesNotExist:
        return Response({"detail": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

# @api_view(['POST'])
# def delete_cart_item_quantity(request, pk):
#     try:
#         cart_item = CartItem.objects.get(id=pk)
#         if cart_item.quantity > 1:
#             cart_item.quantity -= 1
            
    
