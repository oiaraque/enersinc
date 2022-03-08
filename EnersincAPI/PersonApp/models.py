from django.db import models

# Create your models here.

class Persona(models.Model):
	TipoDocumento = models.CharField(max_length=500)  
	NumDocumento = models.CharField(max_length=500)
	Nombres = models.CharField(max_length=500)
	Apellidos = models.CharField(max_length=500)
	Hobbies = models.CharField(max_length=500)