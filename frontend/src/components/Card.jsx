import { Link } from "react-router-dom";
import styles from "../styles/Card.css";

function Card({ title, subtitle, link }) {
    return (
        <div className="card">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <Link to={link} className="card-link">
                View Details
            </Link>
        </div>
    );
}
export default Card;