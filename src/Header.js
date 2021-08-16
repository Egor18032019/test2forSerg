import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Тестовое от Сергея.
        </p>
      </header>
  
  );
}

export default Header;
