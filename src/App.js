
import './App.scss';
import { Link, Outlet } from "react-router-dom";


//BodyWrapper
//Section






function App() {
  return (
    <div className='App'>



      <nav className='navbar-outer'>

        <div className="navbar-inner" >
          <a href="#home" className="navbar-item">Guchee Diaries</a>
          <div className="w3-right w3-hide-small">

            <Link className="navbar-item" to="/places">About Us</Link>
            <Link className="navbar-item" to="/places">Places</Link>
            <Link className="navbar-item" to="/dashboard">Dashboard</Link>

            <Link className="navbar-item" to="/places">Blog</Link>

          </div>
        </div>




      </nav>
      <Outlet />

      <footer className="footer">
        <p>© 2022 Guchee-Diaries.com</p>
      </footer>
    </div>
  );
}

export default App;
