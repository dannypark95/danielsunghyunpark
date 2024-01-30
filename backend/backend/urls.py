from django.contrib import admin
from django.urls import path, include
from blog.views import LoginView, slugify_title  # Import slugify_title

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # Include your app's URL patterns
    path('api/login/', LoginView.as_view(), name='login'),  # Add the login endpoint
    path('api/slugify/', slugify_title, name='slugify_title'),  # Add the slugify endpoint
]
