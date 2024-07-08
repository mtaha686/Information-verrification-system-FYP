"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import PersonalDetailData, AddRecord, ShowRecord

urlpatterns = [
    path("admin/", admin.site.urls),
    path('verify_personal_detail/', PersonalDetailData,
         name='verify_personal_detail'),
    path('submit_personal_detail/', AddRecord.as_view(),
         name='submit_personal_detail'),
    path('get_personal_details/', ShowRecord.as_view(),
         name='get_personal_details'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
