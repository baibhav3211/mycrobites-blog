from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

# Create your models here.


class Post(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    img = models.ImageField(upload_to='images/')
    content = models.TextField()
    author = models.CharField(max_length=50)
    timeStamp = models.DateTimeField(blank=True)
    slug = models.CharField(max_length=130)

    def __str__(self):
        return self.title + 'by' + self.author
