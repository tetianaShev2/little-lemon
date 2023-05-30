import logo from "./img/Asset 20@4x.png";
import "./Footer.css";
function Footer() {
  return (
    <footer class="container">
      <img src={logo} alt="Logo" width={100} length={30} />

      <ul>
        <h4>Doormat navigation</h4>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservation</a>
        </li>
        <li>
          <a href="">Order online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>

      <ul>
        <h4>Contact</h4>
        <li>
          <a href="/">Address</a>
        </li>
        <li>
          <a href="">Phone number</a>
        </li>
        <li>
          <a href="">Email</a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
