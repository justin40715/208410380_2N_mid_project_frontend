import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/Navbar_80';

const NavbarResp_80 = () => {
    return (
        <Wrapper>
            <ul className="hList">
                <li>
                    <a href="#click" className="menu">
                        <h2 className="menu-title">animals</h2>
                        <ul className="menu-dropdown">
                            <li><Link to="">cat</Link></li>
                            <li><Link to="">dog</Link></li>
                            <li><Link to="">horse</Link></li>
                            <li><Link to="">cow</Link></li>
                            <li><Link to="">pig</Link></li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#click" className="menu">
                        <h2 className="menu-title menu-title_2nd">names</h2>
                        <ul className="menu-dropdown">
                            <li><Link to="">Kevin</Link></li>
                            <li><Link to="">Jim</Link></li>
                            <li><Link to="">Andy</Link></li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#click" className="menu">
                        <h2 className="menu-title menu-title_3rd">things</h2>
                        <ul className="menu-dropdown">
                            <li><Link to="">bench</Link></li>
                            <li><Link to="">pizza</Link></li>
                            <li><Link to="">Honda CB125</Link></li>
                            <li><Link to="">space</Link></li>
                            <li><Link to="">black matter</Link></li>
                            <li><Link to="">apple</Link></li>
                            <li><Link to="">philodendron</Link></li>
                            <li><Link to="">liver</Link></li>
                            <li><Link to="">brass</Link></li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#click" className="menu">
                        <h2 className="menu-title menu-title_4th">Movies</h2>
                        <ul className="menu-dropdown">
                            <li><Link to="">Godzilla</Link></li>
                            <li><Link to="">Man on Wire</Link></li>
                            <li><Link to="">Spirited Away</Link></li>
                            <li><Link to="">Interstellar</Link></li>
                        </ul>
                    </a>
                </li>
            </ul>
        </Wrapper>
    )
}

export default NavbarResp_80;