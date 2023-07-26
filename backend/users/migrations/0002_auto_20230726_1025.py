# Generated by Django 2.2.28 on 2023-07-26 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_ert_tyui'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rel_tyui_n_n',
            field=models.ManyToManyField(blank=True, null=True, related_name='user_rel_tyui_n_n', to='home.TYUI'),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]