import { Link } from "react-router-dom";

function Card({ title, author, Link }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>by {author}</p>
            <Link to={link}>View Details</Link>
        </div>
    );
}
export default Card;