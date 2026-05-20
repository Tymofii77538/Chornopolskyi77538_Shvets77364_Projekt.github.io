import { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "../styles/BookList.css";
import Grid from "../components/Grid";

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
            <Grid>
                {books.map((book) => (
                    <Card key={book.id} title={book.title} subtitle={`Author: ${book.author_name}`} link={`/books/${book.id}`} />
                ))}
            </Grid>
        </div>

    )
}

export default BookList