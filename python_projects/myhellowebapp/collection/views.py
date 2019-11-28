from django.shortcuts import render
from collection.models import Thing

# Create your views here.
def index(request):
    things = Thing.objects.all()

    # for getting object by filter
    # things = Thing.objects.filter(name="ok, where are my pants?").order_by("name")
    #
    # or another method
    # things = Thing.objects.filter(name__contains="thing_name") 

    # for getting just one object 
    # correct_thing = Thing.objects.get(name="thing_name")
    return render(request, 'index.html', {
        'things': things,
    })

