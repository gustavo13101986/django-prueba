from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
      
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model( email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')

        user = self.create_user( email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user



class Employees(AbstractBaseUser, PermissionsMixin):
    """Profile employee."""
    names = models.CharField(max_length=50, blank= True)
    email = models.EmailField(max_length=100, unique=True)
    last_name_1 = models.CharField(max_length=50, blank= True)
    last_name_2 = models.CharField(max_length=50, blank= True)
    cedula = models.IntegerField(blank=True, null=True)
    birthdate = models.DateField(blank=True, null=True)
    genero = models.CharField(max_length=100, blank= True)
    created = models.DateTimeField(auto_now_add=True)
    employee_number = models.IntegerField(blank=True, null=True)
    employee_title = models.CharField(max_length=50, blank= True)
    number_jefe = models.IntegerField(blank=True, null=True)
    zona = models.CharField(max_length=10, blank= True)
    municipio = models.CharField(max_length=50, blank= True)
    departamento = models.CharField(max_length=50, blank= True)
    ventas_2019 = models.IntegerField(blank=True, null=True)
    picture = models.ImageField(
        'Imagen de Perfil',
        upload_to='pictures', 
        max_length = 200,
        blank=True,
        null=True
    )
    phone_number = models.CharField(max_length=20, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"

