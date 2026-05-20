import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link, useParams } from "react-router-dom";
import "../styles/AuthorDetail.css";

function AuthorDetail() {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        axios.get(`/authors/${id}/`)
            .then((response) => {
                setAuthor(response.data);
            })
            .catch((error) => {
                console.error("Error fetching author:", error);
            });
    }, [id]);

    if (!author) {
        return <div>Loading...</div>;
    }

    return (
        <div className="author-detail-container">
            <h1 className="author-detail-title">{author.name}</h1>
            <p className="author-detail-biography">{author.biography}</p>
            <h2 className="author-detail-books-title">Books by {author.name}</h2>
            <div className="author-detail-books">
                {author.books.map((book) => (
                    <div key={book.id} className="author-detail-book">
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/authors" className="author-detail-back-link">
                Back to Author List
            </Link>
        </div>
    );
}

export default AuthorDetail;