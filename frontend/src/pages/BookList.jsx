import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
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
            <Link to="/add" className="add-book-link">Add New Book</Link>
            <div className="cards-container">
                {books.map((book) => (
                    <Card key={book.id} title={book.title} subtitle={book.author_name} link={`/books/${book.id}`} />
                ))}
            </div>
        </div>
    )
}

export default BookList