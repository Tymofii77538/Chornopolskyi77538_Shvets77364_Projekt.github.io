import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`/books/${id}/`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });
    }, [id]);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <h1 className="book-title">{book.title}</h1>
            <p className="author">Author: {book.author}</p>
            <p className="description">Description: {book.description}</p>
            <Link to="/" className="back-to-book-list">Back to Book List</Link>
        </div>
    )
}

export default BookDetail