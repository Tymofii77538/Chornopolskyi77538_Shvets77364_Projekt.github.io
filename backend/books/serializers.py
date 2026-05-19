from rest_framework import serializers
from .models import Book, Author


class BookSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.name', read_only=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'description', 'author', 'author_name']


class AuthorSerializer(serializers.ModelSerializer):
    book_count = serializers.SerializerMethodField()
    books = BookSerializer(source='book_set', many=True, read_only=True)

    def get_book_count(self, obj):
        return obj.book_set.count()

    class Meta:
        model = Author
        fields = ['id', 'name', 'book_count', 'books']
