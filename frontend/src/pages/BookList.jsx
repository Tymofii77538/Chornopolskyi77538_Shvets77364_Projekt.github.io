import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import "../styles/BookList.css";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("/books/")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    }, [])

    return (
        <div className="book-list-container">
            <h1 className="book-list-title">Book List</h1>
            {books.map((book) => (
                <Card key={book.id} title={book.title} subtitle={book.author} link={`/books/${book.id}`} />
            ))}
        </div>
    )
}

export default BookList