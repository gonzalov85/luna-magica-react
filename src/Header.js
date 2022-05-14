import logo from './images/luna.png';

function Header() {
    return (
            <div className="App">
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Luna Mágica</h3>
                    <p>
                        Consulta de tarot
                    </p>
                </header>
            </div>
    );
  }

  export default Header;