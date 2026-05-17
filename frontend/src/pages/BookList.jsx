import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

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
        <div>
            <h1>Book List</h1>
            {books.map((book) => (
                <div key={book.id}>
                    <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                    <p>Author: {book.author}</p>
                </div>
            ))}
        </div>
    )
}

export default BookList