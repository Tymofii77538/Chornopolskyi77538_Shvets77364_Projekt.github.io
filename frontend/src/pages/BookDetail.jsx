import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/BookDetail.css";

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
        return <div>Loading...</div>;
    }

    return (
        <div className="book-detail-container">
            <h1 className="book-info-title">{book.title}</h1>
            <p className="book-author">Author: {book.author_name}</p>
            <p className="book-description">Description: {book.description}</p>
            <Link to={`/books/${id}/edit`} className="edit-book-button">
                Edit Book
            </Link>
            <button className="delete-book-button"
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete this book?")) {
                        axios.delete(`/books/${id}/`)
                            .then(() => {
                                navigate("/");
                            })
                            .catch((error) => {
                                console.error("Error deleting book:", error);
                            });
                    }
                }}
            >
                Delete Book
            </button>
            <Link to="/" className="back-to-book-list">
                Back to Book List
            </Link>

        </div>
    )
}

export default BookDetail