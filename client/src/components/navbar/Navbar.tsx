import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/"><h2>Coasters</h2></Link>
            {location.pathname === "/" &&
                <div><Link to="/coasters"><h4>Look all coasters</h4></Link></div>
            }
            {location.pathname === "/coasters" &&
                <div><Link to="/"><h4>Back to index</h4></Link></div>
            }
            {location.pathname.match(/^\/coaster\/\w+$/) &&
                <div><Link to="/coasters"><h4>Back to all coasters</h4></Link></div>
            }
        </nav>
    );
};

export default Navbar;