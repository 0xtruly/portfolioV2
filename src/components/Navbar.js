import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import config from '@config';

export const Navbar = () => {
  const [tabs, setTabs] = useState(
    [
      { content: 'About', href: 'about' },
      { content: 'Projects', href: 'projects' },
      { content: 'Contact', href: 'contact' },
      { content: 'Hire Me', href: 'hireme' },
    ]
  );

  console.log(tabs)
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
              className="navbar-nav"
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li className="nav-item" key={href}>
                    <Scroll type="id" element={href}>
                      <a className="nav-link" href={`#${href}`}>
                        {content}
                      </a>
                    </Scroll>
                  </li>
                );
              })}
            </Scrollspy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
