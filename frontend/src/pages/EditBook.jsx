import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get(`/books/${id}/`)
            .then((response) => {
                setBook(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setAuthorId(response.data.author);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });
        axios.get("/authors/")
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error("Error fetching authors:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/books/${id}/`, { title, description, author: authorId })
            .then((response) => {
                setBook(response.data);
                navigate(`/books/${id}`);
            })
            .catch((error) => {
                console.error("Error updating book:", error);
            });
    };

    if (!book) {
        return <div>Loading...</div>;
    }
    return (
        <div className="edit-book-container">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <select
                        id="author"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                    >
                        <option value="">Select an author</option>
                        {authors.map((author) => (
                            <option key={author.id} value={author.id}>
                                {author.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
}
export default EditBook;