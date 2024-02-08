from django.contrib import admin
from django.urls import path, include
from blog.views import LoginView, slugify_title  # Import slugify_title

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/slugify/', slugify_title, name='slugify_title'),
]
