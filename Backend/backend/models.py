from django.db import models


class PersonalDetail(models.Model):
    name = models.CharField(max_length=255)
    father_name = models.CharField(max_length=255)
    cnic = models.CharField(max_length=15)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    cnic_upload = models.ImageField(upload_to='backend/uploads/cnic')
    ssc_obtained = models.IntegerField()
    ssc_total = models.IntegerField()
    ssc_passing_year = models.IntegerField()
    ssc_board = models.CharField(max_length=50)
    ssc_roll_no = models.IntegerField()
    ssc_upload = models.ImageField(upload_to='backend/uploads/ssc')
    fsc_obtained = models.IntegerField()
    fsc_total = models.IntegerField()
    fsc_passing_year = models.IntegerField()
    fsc_board = models.CharField(max_length=50)
    fsc_roll_no = models.IntegerField()
    fsc_upload = models.ImageField(upload_to='backend/uploads/fsc')

    def __str__(self):
        return self.name
