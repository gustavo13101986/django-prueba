from rest_framework import routers
from django.urls import path
from .views import EmployeesViewsets, LoginViewSet, RegistrationViewSet


router = routers.DefaultRouter()
router.register('employee', EmployeesViewsets, 'employee')
router.register('auth/login', LoginViewSet, basename='auth-login')
router.register('auth/register', RegistrationViewSet, basename='auth-register')



urlpatterns = router.urls


  