
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { state, dispatch } = useContext(ThemeContext);

    const isLight = state.theme === "light";

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: isLight ? "#eee" : "#333",
                    color: isLight ? "#000" : "#fff",
                }}
            >
                <div className="container-fluid">

                    <Link
                        className="navbar-brand"
                        to="/"
                        style={{ color: isLight ? "#000" : "#fff" }}
                    >
                        ShopKart
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: isLight ? "#000" : "#fff" }}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Cart" style={{ color: isLight ? "#000" : "#fff" }}>
                                    Cart
                                </Link>
                            </li>
                             
                             <li className="nav-item">
                                <Link className="nav-link" to="/Product" style={{ color: isLight ? "#000" : "#fff" }}>
                                    Products
                                </Link>
                            </li>
                           

                            

                           

                            <li className="nav-item">
                                <Link className="nav-link" to="/login" style={{ color: isLight ? "#000" : "#fff" }}>
                                    Login
                                </Link>
                            </li>

                

                        </ul>

                        <button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
                            style={{
                                backgroundColor: isLight ? "#333" : "#eee",
                                color: isLight ? "#fff" : "#000",
                            }}
                        >
                            {isLight ? "Dark Mode" : "Light Mode"}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;