import logo from '../images/luna.png';
import React from 'react';

function Header() {
    return (
            <div className="App">
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
    );
  }

  export default Header;