from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView

from collection import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('contact/', TemplateView.as_view(template_name='contact.html'), name='contact'),
    path('admin/', admin.site.urls),
    re_path(r'^things/(?P<slug>[-\w]+)/$', views.thing_detail, name="thing_detail")
]
