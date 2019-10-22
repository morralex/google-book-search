import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router"

function Nav(props) {
  console.log(props)
  return (
    <nav>
    <div className="nav-wrapper #3949ab indigo darken-1">
      <Link to="/search" className="brand-logo">Google Books</Link>
      <ul id="nav-mobile" className="right">
        <li>
          <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
            Search
            </Link>
          </li>
        <li>
          <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
            </Link>
          </li>
      </ul>
    </div>
  </nav>
  );
}

export default withRouter(Nav);
