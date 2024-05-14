from rest_framework import serializers
from .models import PersonalDetail


class PersonalDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDetail
        fields = '__all__'
