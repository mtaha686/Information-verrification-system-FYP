from django.contrib import admin
from .models import PersonalDetail


class RecordAdmin(admin.ModelAdmin):
    readonly_fields = ('id')


admin.site.register(PersonalDetail)


'''
username/pass: taha@686
email: tahamuhammadi476@gmail.com
'''
