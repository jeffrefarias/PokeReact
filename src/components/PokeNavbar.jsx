import { NavLink } from "react-router-dom";

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-collapse justify-content-between">
               
                <div className="navbar-nav align-items-start">
                    <NavLink className={`nav-link pokeIcon ${setActiveClass}`} to='/*'>
                        <img src="./src/assets/img/icon.png" alt="" />
                    </NavLink>
                </div>

                
                <div className="navbar-nav align-items-end">
                    <NavLink className={`nav-link ${setActiveClass}`} to="/" >
                        Home
                    </NavLink>
                    <NavLink className={`nav-link ${setActiveClass}`} to="/pokemons">
                        Pokemons
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

