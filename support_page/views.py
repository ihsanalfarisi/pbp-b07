from django.shortcuts import render
from .models import Support
from .forms import SupportForm
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required


# Create your views here.
def index(request):
    supports = Support.objects.all()
    response = {'supports': supports}
    return render(request, 'support_index.html', response)

def add_support(request):
    # create object of form
    form = SupportForm(request.POST or None)

    # check if form data is valid
    if form.is_valid() and request.method == 'POST':
        # save the form data to the model
        form.save()

        return HttpResponseRedirect("/support-page/support_list")
    
    context = {'form': form}
    return render(request, "support_form.html", context)


def support_list(request):
    supports = Support.objects.all()
    response = {'supports': supports}
    return render(request, 'support_list.html', response)


def json(request):
    data = serializers.serialize('json', Support.objects.all())
    return HttpResponse(data, content_type="application/json")