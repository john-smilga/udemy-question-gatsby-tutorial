import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="/blog/">Blog</Link>
                </li>                
                <li>
                <Link to="/produits/">produits</Link>
                </li>
                <li>
                <Link to="/examples/">examples</Link>
                </li>
                <li>
                <Link to="/images/">images</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
