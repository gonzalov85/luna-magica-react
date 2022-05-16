import logo from '../images/luna.png';

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