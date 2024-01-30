from django.contrib import admin
from .models import Post, Tag, Project, Profile

admin.site.register(Post)
admin.site.register(Tag)
admin.site.register(Project)
admin.site.register(Profile) 