from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from PersonApp.models import Persona
from PersonApp.serializers import PersonaSerializer

# Create your views here.

@csrf_exempt
def personaApi(request,id=0):
	if request.method == 'GET':
		persona = Persona.objects.all()
		persona_serializer= PersonaSerializer(persona,many=True)
		return JsonResponse(persona_serializer.data, safe=False)

	elif request.method == 'POST':
		persona_data= JSONParser().parse(request)
		persona_serializer= PersonaSerializer(data=persona_data)
		if persona_serializer.is_valid():
			persona_serializer.save()
			return JsonResponse("Added Successfully",safe=False)
		return JsonResponse("Failed to add",safe=False)

	elif request.method == "PUT":
		persona_data=JSONParser().parse(request)
		persona= Persona.objects.get(NumDocumento=persona_data['NumDocumento'])
		persona_serializer= PersonaSerializer(persona,data=persona_data)
		if persona_serializer.is_valid():
			persona_serializer.save()
			return JsonResponse("Updated Successfully",safe=False)
		return JsonResponse("Failed to add")

	elif request.method == 'DELETE':
		persona = Persona.objects.get(id=id)
		persona.delete()
		return JsonResponse("Deleted Successfully",safe=False)

