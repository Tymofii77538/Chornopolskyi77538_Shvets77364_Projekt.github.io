import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../styles/AddBook.css";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/books/", { title, author, description })
            .then((response) => {
                navigate(`/books/${response.data.id}`);
            })
            .catch((error) => {
                console.error("Error adding book:", error);
            });
    };

    return (
        <div>
            <h1 className="add-book-title">Add New Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="title">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="author">Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="description">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="add-book-button">
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBook