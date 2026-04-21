from django.http import JsonResponse
from .models import Book


def books_list(request):
    books = Book.objects.values()
    return JsonResponse(list(books), safe=False)