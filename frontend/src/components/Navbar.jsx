import { Link } from 'react-router-dom'
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                        Bookshelf
                    </Link>
                    <Link to="/authors" className="navbar-link">
                        Authors
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;