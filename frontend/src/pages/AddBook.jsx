import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import "../styles/AddBook.css";
import FormField from "../components/FormField";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState([]);
    const [showNewAuthor, setShowNewAuthor] = useState(false);
    const [newAuthorName, setNewAuthorName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/authors/")
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error("Error fetching authors:", error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (showNewAuthor) {
            // Create new author first
            axios.post("/authors/", { name: newAuthorName })
                .then((authorResponse) => {
                    // Then create the book with the new author
                    axios.post("/books/", { title, author: authorResponse.data.id, description })
                        .then((bookResponse) => {
                            navigate(`/books/${bookResponse.data.id}`);
                        })
                        .catch((error) => {
                            console.error("Error adding book:", error);
                        });
                })
                .catch((error) => {
                    console.error("Error adding author:", error);
                });
        } else {
            axios.post("/books/", { title, author, description })
                .then((response) => {
                    navigate(`/books/${response.data.id}`);
                })
                .catch((error) => {
                    console.error("Error adding book:", error);
                });
        }
    };

    return (
        <div className="add-book-container">
            <h1 className="form-title">Add New Book</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div>
                    <label className="input-label">Author:</label>
                    <select
                        className="input-field"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required={!showNewAuthor}
                    >
                        <option value="">Select an author</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                    <button type="button" className="add-author-button"
                        onClick={() =>
                            setShowNewAuthor(!showNewAuthor)}>
                        {showNewAuthor ? "Cancel" : "Add New Author"}
                    </button>
                </div>
                {showNewAuthor && (
                    <div>
                        <label className="input-label">New Author Name:</label>
                        <input
                            type="text"
                            className="input-field"
                            value={newAuthorName}
                            onChange={(e) => setNewAuthorName(e.target.value)}
                            required={showNewAuthor}
                        />
                    </div>
                )}
                <FormField
                    label="Description"
                    type="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className="add-book-button">
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBook