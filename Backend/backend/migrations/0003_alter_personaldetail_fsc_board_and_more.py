# Generated by Django 4.2.4 on 2024-05-17 10:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("backend", "0002_alter_personaldetail_cnic_upload_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="personaldetail",
            name="fsc_board",
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name="personaldetail",
            name="ssc_board",
            field=models.CharField(max_length=500),
        ),
    ]
