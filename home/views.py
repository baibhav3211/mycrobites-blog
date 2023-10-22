from django.shortcuts import render, HttpResponse, redirect
from home.models import Post
from django.contrib import messages
from django.contrib.auth.models import User


# Create your views here.
def blogHome(request): 
    allPosts= Post.objects.all()
    context={'allPosts': allPosts}
    return render(request, "blog/Home.html", context)

def blogPost(request, slug): 
    post=Post.objects.filter(slug=slug).first()
    post.save()
    
    
    context={'post':post}
    return render(request, "blog/blogPost.html", context)



