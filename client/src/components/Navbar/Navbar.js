import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id='navbar'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </nav>
    )
}
