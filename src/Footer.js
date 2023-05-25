import logo from "./img/Asset 20@4x.png";
function Footer() {
  return (
    <footer>
      <img src={logo} width={50} length={50} alt="Logo" />
      <h4>Doormat navigation</h4>
      <ul>
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
      <h4>Contact</h4>
      <ul>
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
