from django.contrib import admin
from home.models import Post

@admin.register(Post)


class PostAdmin(admin.ModelAdmin):
    class Media:
        js= ('tinyInject.js',)