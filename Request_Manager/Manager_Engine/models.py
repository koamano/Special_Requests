from django.db import models

# Create your models here.


class Request(models.Model):
    id = models.AutoField(primary_key=True)
    store = models.CharField(max_length=32)
    name = models.CharField(max_length=64, default="null")
    phone = models.CharField(max_length=16, default="000-000-0000")
    type = models.CharField(max_length=64)
    category = models.CharField(max_length=64)
    subcategory = models.CharField(max_length=64, default="none")
    vendor = models.CharField(max_length=64)
    model = models.CharField(max_length=64)
    size = models.CharField(max_length=64)
    color = models.CharField(max_length=64, blank=True)
    width = models.CharField(max_length=64, blank=True)
    item_number = models.CharField(max_length=64, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=64, default="open")
    requested_by = models.CharField(max_length=64)
    purchase_order = models.CharField(max_length=64, blank=True)
    # quantity = models.CharField(max_length=12, blank=True, default="0")
    # other_store_inventory = models.BooleanField(default=False)
    # hold_until = models.DateTimeField(
    #     null=True, default="1900-01-01")

    def __str__(self):
        return f"{self.id} - {self.model} - {self.date:%B %d, %Y}"


class History(models.Model):
    request = models.ForeignKey(
        Request, related_name='histories', on_delete='PROTECT')
    create_date = models.DateTimeField(auto_now_add=True, blank=True)
    author = models.CharField(max_length=8, default="admin")
    text = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.request.id} - {self.text} - {self.create_date:%B %d, %Y} - {self.author}"


class Notes(models.Model):
    request = models.ForeignKey(
        Request, related_name='notes', on_delete='PROTECT')
    create_date = models.DateTimeField(auto_now_add=True, blank=True)
    author = models.CharField(max_length=8)
    text = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.request.id} - {self.text} - {self.create_date:%B %d, %Y} - {self.author}"
