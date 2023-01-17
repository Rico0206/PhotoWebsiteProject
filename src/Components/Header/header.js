import React from 'react';

const Header = () => {


    return (
        <header>
            <ul style={{ height: '90px' }} class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio" >Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;