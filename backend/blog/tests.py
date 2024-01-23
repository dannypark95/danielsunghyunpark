from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post

class PostAPITests(APITestCase):
    def test_create_post(self):
        """
        Ensure we can create a new post.
        """
        url = reverse('post-list')
        data = {'title': 'Test Post', 'content': 'Some test content'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)
        self.assertEqual(Post.objects.get().title, 'Test Post')

    def test_get_post_list(self):
        """
        Ensure we can retrieve a list of posts.
        """
        url = reverse('post-list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)