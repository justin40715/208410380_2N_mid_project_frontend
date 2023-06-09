import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/Navbar_80';
const NavbarResp_80 = () => {
  return (
    <Wrapper>
      <div id='container'>
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
            <ul>
              <li>
                <Link to='#'>Lorem ipsum dolor</Link>
              </li>
              <li>
                <Link to='#'>Maecenas lacinia sem</Link>
              </li>
              <li>
                <Link to='#'>Suspendisse fringilla</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='#'>CardContext_Demo</Link>
            <ul>
              <li>
                <Link to='local_context_80'>CardLocalContextPage</Link>
              </li>
              <li>
                <Link to='/node_context_80'>CardNodeContextPage</Link>
              </li>
              <li>
                <Link to='/static_context_80'>CardStaticContextPage</Link>
              </li>
              <li>
                <Link to='/supabase_context_80'>CardSupaContextPage</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='#'>Project_Card_Demo</Link>
            <ul>
              <li>
                <Link to='/local_80'>CardLocalJsonPage</Link>
              </li>
              <li>
                <Link to='/card_80'>CardStaticPage</Link>
              </li>
              <li>
                <Link to='/node_80'>CardNodeServerPage</Link>
              </li>
              <li>
                <Link to='/supabase_80'>CardSupabasePage</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='#'>Contact Me</Link>
            <ul>
              <li>
                <Link to='#'>Lorem ipsum dolor</Link>
              </li>
              <li>
                <Link to='#'>Maecenas dignissim fermentum luctus</Link>
              </li>
              <li>
                <Link to='#'>Suspendisse fringilla</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='#'>Support</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default NavbarResp_80;
