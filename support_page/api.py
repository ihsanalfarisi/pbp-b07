from django.core import serializers
from django.http.response import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from support_page.models import Support


def fetch_support(request):
    data = serializers.serialize('json', Support.objects.all()) #kyknya bisa dijadiin all gitu
    return HttpResponse(data, content_type="application/json")

@csrf_exempt
def create_support(request):
    if request.method == "POST":
        data = json.loads(request.body)

        support = Support(
          Negara_yang_dituju = data["negara"],
          Lokasi_kejadian = data["lokasi"],
          Kejadian_secara_umum = data["kejadian"],
          keluhan = data["keluhan"],
          saran = data["saran"]
        )

        support.save()

        return JsonResponse({"message": "Form keluhan telah tersimpan"}, status=200)