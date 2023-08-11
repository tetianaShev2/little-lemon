import "./Nav.css";
import About from "./About";
import Homepage from "./Homepage";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
function Nav() {
  return (
    <div>
      <nav className="Navmenu">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/reservation" className="nav-item">
          Reservation
        </Link>
        <Link to="/orderOnline" className="nav-item">
          Order Online
        </Link>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservation" element={<BookingPage />}></Route>
        <Route path="/orderOnline" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
export default Nav;
