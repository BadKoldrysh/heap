from django.shortcuts import render

# Create your views here.
def index(request):
    # this is your new view
    return render(request, 'index.html')
def about(request):
    # this is your new view
    return render(request, 'about.html')
def contact(request):
    # this is your new view
    return render(request, 'contact.html')
