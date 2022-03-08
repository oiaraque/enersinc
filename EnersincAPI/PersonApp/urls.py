from django.urls import re_path
from PersonApp import views

urlpatterns=[
	re_path(r'^persona$',views.personaApi),
	re_path(r'^persona/([0-9]+)$',views.personaApi)
]