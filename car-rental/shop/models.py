from django.db import models
from django.contrib.auth.models import User

class Catagory(models.Model):
    name= models.CharField(max_length=100)
    # image = models.ImageField(upload_to='catagory/%Y/%m/%d/')
    slug=models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField(blank=True)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    image=models.ImageField(upload_to='product/',blank=True,null=True)
    slug=models.SlugField(unique=True)
    catagory=models.ForeignKey(Catagory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
# Create your models here.
class Userprofile(models.Model):
    user= models.OneToOneField(User, on_delete=models.CASCADE)
    # name=models.CharField(max_length=100)
    email=models.EmailField(blank=True)
    password=models.CharField(max_length=100)
    slug=models.SlugField(unique=True)

    def __str__(self):
        return self.user.username

class Order(models.Model):
    user=models.ForeignKey(Userprofile, on_delete=models.CASCADE)
    product=models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity=models.IntegerField(default=1)
    date=models.DateTimeField(auto_now_add=True)
    total_amount=models.DecimalField(max_digits=10, decimal_places=2)
    slug=models.SlugField(unique=True)
    def __str__(self):
        return f"order {self.id} by {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"order item {self.id} by {self.order.user.username}"
        