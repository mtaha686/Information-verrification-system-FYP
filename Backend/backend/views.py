from rest_framework.decorators import api_view
from .serialize import PersonalDetailSerializer
from .models import PersonalDetail
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import *
import json


@csrf_exempt
def PersonalDetailData(request):
    if request.method == 'POST':
        form_data = extract_form_data(request)

        id_card_data = extract_data_from_image(form_data['cnicUpload'])
        ssc_ms_data = extract_data_from_image(form_data['sscUpload'])
        fsc_ms_data = extract_data_from_image(form_data['fscUpload'])

        id_card_tokens = clean_and_tokenize(id_card_data)
        ssc_tokens = clean_and_tokenize(ssc_ms_data)
        fsc_tokens = clean_and_tokenize(fsc_ms_data)

        ssc_numeric_values = [''.join(filter(str.isdigit, token))
                              for token in ssc_tokens if not token.isalpha() and len(''.join(filter(str.isdigit, token))) > 2]
        fsc_numeric_values = [''.join(filter(str.isdigit, token))
                              for token in fsc_tokens if not token.isalpha() and len(''.join(filter(str.isdigit, token))) > 2]

        id_card_result = process_card_data(
            form_data, id_card_data, id_card_tokens,)
        ssc_result = process_ssc_ms_data(
            form_data, ssc_tokens, ssc_numeric_values)
        fsc_result = process_fsc_ms_data(
            form_data, fsc_tokens, fsc_numeric_values)

        comp_data = {
            'card_data': id_card_result,
            'ssc_data': ssc_result,
            'fsc_data': fsc_result,
        }
        file_path = 'compared_data.json'
        with open(file_path, 'w') as json_file:
            json.dump(comp_data, json_file, indent=2)
        # return JsonResponse({'comp_data': comp_data})
        return JsonResponse({
            'card_data': id_card_result,
            'ssc_data': ssc_result,
            'fsc_data': fsc_result, })

    return JsonResponse({'error': 'huahahahahahah'})


def extract_form_data(request):
    return {
        'name': request.POST.get('name'),
        'father_name': request.POST.get('fatherName'),
        'cnic': request.POST.get('cnic'),
        'dob': request.POST.get('dob'),
        'gender': request.POST.get('gender'),
        'cnicUpload': request.FILES.get('cnicUpload'),

        'sscObtained': request.POST.get('sscObtained'),
        'sscTotal': request.POST.get('sscTotal'),
        'ssc_py': request.POST.get('ssc_py'),
        'ssc_board': request.POST.get('ssc_board'),
        'ssc_rno': request.POST.get('ssc_rno'),
        'sscUpload': request.FILES.get('sscUpload'),

        'fscObtained': request.POST.get('fscObtained'),
        'fscTotal': request.POST.get('fscTotal'),
        'fsc_py': request.POST.get('fsc_py'),
        'fsc_board': request.POST.get('fsc_board'),
        'fsc_rno': request.POST.get('fsc_rno'),
        'fscUpload': request.FILES.get('fscUpload'),
    }


class ShowRecord(APIView):
    def get(self, request):
        details_obj = PersonalDetail.objects.all()
        details_serialize_obj = PersonalDetailSerializer(
            details_obj, many=True)
        return Response(details_serialize_obj.data)


class AddRecord(APIView):
    def post(self, request):
        serialize_obj = PersonalDetailSerializer(data=request.data)
        if serialize_obj.is_valid():
            serialize_obj.save()
            return Response({"message": "Record added successfully"}, status=201)
        return Response(serialize_obj.errors, status=400)
