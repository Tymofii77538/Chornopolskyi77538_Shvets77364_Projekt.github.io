import { useState, useEffect } from "react";
import axios from "../api/axios";
import Card from "../components/Card";
import "../styles/AuthorList.css";

function AuthorList() {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get("/authors/")
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((error) => {
                console.error("Error fetching authors:", error);
            });
    }, [])

    return (
        <div className="author-list-container">
            <h1 className="author-list-title">Author List</h1>
            {authors.map((author) => (
                <Card key={author.id} title={author.name} subtitle={`Books: ${author.book_count}`} link={`/authors/${author.id}`} />
            ))}
        </div>
    )
}
export default AuthorList
