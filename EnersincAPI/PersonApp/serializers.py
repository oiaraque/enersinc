from rest_framework import serializers
from PersonApp.models import Persona

class PersonaSerializer(serializers.ModelSerializer):
	class Meta:
		model=Persona
		fields=('TipoDocumento', 'NumDocumento', 'Nombres', 'Apellidos', 'Hobbies')