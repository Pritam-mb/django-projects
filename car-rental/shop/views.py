from django.shortcuts import render
from django.http import JsonResponse
from .models import Product,Catagory
from .seriliser import ProductSerializer,CatagorySerializer
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
