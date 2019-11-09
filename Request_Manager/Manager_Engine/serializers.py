from rest_framework import serializers
from .models import Request, History, Notes


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = (
            'id',
            'store',
            'name',
            'phone',
            'type',
            'category',
            'subcategory',
            'vendor',
            'model',
            'size',
            'color',
            'width',
            'item_number',
            'date',
            'status',
            'requested_by',
            'purchase_order',)
        # 'quantity',
        # 'other_store_inventory',
        # 'hold_until')


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = (
            'request',
            'create_date',
            'author',
            'text'
        )


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = (
            'request',
            'create_date',
            'author',
            'text'
        )
