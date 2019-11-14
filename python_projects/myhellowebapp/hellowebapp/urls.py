from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.urls import path

urlpatterns = patterns('',
    url(r'^$', 'collection.views.index', name='home'),
    url(r'^admin/', include(admin.site.urls)),
)
