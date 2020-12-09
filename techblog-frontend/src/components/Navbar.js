import React from "react";
import { Link } from "react-router-dom";
//images
import computerEmoji from "./img/TechBlog2.png";
 
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div>
                    <div className="nav-container">
                        <div className="brand">
                            <Link to="/">
                                <img src={computerEmoji} alt="computer emoji" />
                                <h1>TechBlogs</h1>
                            </Link>
                            
                        </div>
                        <div className="links">
                            <Link to="/posts">Posts</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;