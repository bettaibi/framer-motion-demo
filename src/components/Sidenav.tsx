import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {

    return (
        <aside className="sidenav">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Modal</Link>
                    </li>
                    <li>
                        <Link to="/accordion">Accordion</Link>
                    </li>
                    <li>
                        <Link to="/tabs">Tabs</Link>
                    </li>
                    <li>
                        <Link to="/slider">Slider</Link>
                    </li>
                    <li>
                        <Link to="/steps">Steps</Link>
                    </li>
                    <li>
                        <Link to="/carousel">Carousel</Link>
                    </li>
                    <li>
                        <Link to="/notifications">Notification</Link>
                    </li>
                    <li>
                        <Link  to="/Grid"></Link>
                    </li>
                    <li>
                        <Link to="/svg">SVG Animation</Link>
                    </li>
                    <li>
                        <Link  to="/sidebar">Sidebar</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidenav