from django.shortcuts import render

# Create your views here.
def index(request):
    # defining the variable
    number = 4
    # passing the variable to the view
    # this is your new view
    return render(request, 'index.html', {
        'number': number,
    })

