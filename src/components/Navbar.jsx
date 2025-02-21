import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar-list">
            <li>
                <NavLink to="/" className="navbar-link">About</NavLink>
            </li>
            <li>
                <NavLink to="/resume" className="navbar-link">Resume</NavLink>
            </li>
            <li>
                <NavLink to="/project" className="navbar-link">Projects</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar