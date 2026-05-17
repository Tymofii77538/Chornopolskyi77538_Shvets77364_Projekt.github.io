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
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <Link to="/">Back to Book List</Link>
        </div>
    )
}

export default BookDetail