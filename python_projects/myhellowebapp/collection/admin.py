from django.contrib import admin

# import created models
from collection.models import Thing
from collection.models import Profile

# set up automated slug creation
class ThingAdmin(admin.ModelAdmin):
    model = Thing
    list_display = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)} 

class ProfileAdmin(admin.ModelAdmin):
    model = Profile
    list_display = ('name', 'description', 'updated')

# ...and register it
admin.site.register(Thing, ThingAdmin)
admin.site.register(Profile, ProfileAdmin)
