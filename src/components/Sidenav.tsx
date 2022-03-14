import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {

    return (
        <aside className="sidenav">
            <nav>
                <ul>
                    <li>
                        <Link to="/notifications">Notification</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidenav