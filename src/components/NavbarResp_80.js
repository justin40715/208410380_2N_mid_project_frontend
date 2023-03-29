import React from 'react'
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/Navbar_80';
const NavbarResp_80 = () => {
    return (
        <Wrapper>
            <div id="container">
                <ul id="menu">
                    <li><Link to="#">About Me</Link>
                        <ul>
                            <li><Link to="#">Lorem ipsum dolor</Link></li>
                            <li><Link to="#">Maecenas lacinia sem</Link></li>
                            <li><Link to="#">Suspendisse fringilla</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Portfolio</Link>
                        <ul>
                            <li><Link to="#">Lorem ipsum dolor</Link></li>
                            <li><Link to="#">Maecenas dignissim fermentum luctus</Link></li>
                            <li><Link to="#">Suspendisse fringilla</Link></li>
                            <li><Link to="#">Lorem ipsum dolor</Link></li>
                            <li><Link to="#">Maecenas lacinia sem</Link></li>
                            <li><Link to="#">Suspendisse fringilla</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Clients</Link>
                        <ul>
                            <li><Link to="#">Lorem ipsum dolor</Link></li>
                            <li><Link to="#">Maecenas lacinia sem</Link></li>
                            <li><Link to="#">Suspendisse fringilla</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Contact Me</Link>
                        <ul>
                            <li><Link to="#">Lorem ipsum dolor</Link></li>
                            <li><Link to="#">Maecenas dignissim fermentum luctus</Link></li>
                            <li><Link to="#">Suspendisse fringilla</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Support</Link></li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default NavbarResp_80;