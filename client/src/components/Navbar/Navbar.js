import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id='navbar'>
            <ul>
                <li><NavLink id="home_link" to="/"><i id='home_icon' class="fa fa-home fa-lg"></i></NavLink></li>
            </ul>
        </nav>
    )
}
