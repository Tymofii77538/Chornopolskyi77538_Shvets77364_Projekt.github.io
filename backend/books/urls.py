from django.urls import path
from .views import AuthorListCreateView, AuthorDetailView, BookListCreateView, BookDetailView, ReviewListCreateView

urlpatterns = [
    path('books/', BookListCreateView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
    path('authors/', AuthorListCreateView.as_view(), name='author-list'),
    path('authors/<int:pk>/', AuthorDetailView.as_view(), name='author-detail'),
    path('books/<int:book_id>/reviews/',
         ReviewListCreateView.as_view(), name='review-list'),
]
