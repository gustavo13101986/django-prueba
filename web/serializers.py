from rest_framework import serializers
from .models import Employees

# Employees Serializers
class EmployeesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist



class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = EmployeesSerializers(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


class RegisterSerializer(EmployeesSerializers):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    email = serializers.EmailField(required=True, write_only=True, max_length=128)

    class Meta:
        model = Employees
        fields = '__all__'


    def create(self, validated_data):
        try:
            user = Employees.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = Employees.objects.create_user(**validated_data)
        return user