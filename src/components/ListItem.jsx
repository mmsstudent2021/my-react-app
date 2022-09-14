import React from 'react';

function ListItem({name,link}) {

    // console.log(name,link)

    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{ name }</a>
        </li>
    );
}

export default ListItem;