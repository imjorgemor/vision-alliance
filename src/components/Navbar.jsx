import "../styles/Navbar.scss"


const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* change logo for name */}

            </div>
            <ul className="navbar-links">
                {
                    ["home", "about", "how it works", "contact"].map(navItem =>
                        <li key={navItem} className="display-flex p-text">
                            <a href={`#${navItem}`}>{navItem}</a>
                        </li>)
                }
            </ul>
            {/* add mobile menu if required */}
        </nav>
    )
}

export default Navbar