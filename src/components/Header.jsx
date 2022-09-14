import React from 'react';
import ListItem from "./ListItem";

function Header(props) {

    const menus = ["Home","About","Services","Contact"];

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        { menus.map((menu,index) => <ListItem key={`menu-`+index} name={menu} link={'link'}  />) }

                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;