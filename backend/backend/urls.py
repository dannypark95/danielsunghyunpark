from django.contrib import admin
from django.urls import path, include
from blog.views import LoginView  # Import the LoginView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # Include your app's URL patterns
    path('api/login/', LoginView.as_view(), name='login'),  # Add the login endpoint
]
