from django.conf import settings
from django.db import models
class TYUI(models.Model):
    'Generated Model'
    hjk = models.DecimalField(max_digits=30,decimal_places=10,)
    rel_ert_1_1 = models.OneToOneField("home.ERT",blank=True,null=True,on_delete=models.CASCADE,related_name="tyui_rel_ert_1_1",)
class ERT(models.Model):
    'Generated Model'
    rty = models.CharField(max_length=20,)
    sda = models.BigIntegerField(null=True,blank=True,)
    fvxv = models.BigIntegerField(null=True,blank=True,)
    rel_user_1_n = models.ForeignKey("users.User",blank=True,null=True,on_delete=models.CASCADE,related_name="ert_rel_user_1_n",)
