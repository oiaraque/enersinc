from django.db import models

# Create your models here.

class Persona(models.Model):
	PersonaTipoDocumento = models.CharField(max_length=500)  
	PersonaNumDocumento = models.IntegerField(null=True)
	PersonaNombres = models.CharField(max_length=500)
	PersonaApellidos = models.CharField(max_length=500)
	PersonaHobbies = models.CharField(max_length=500)