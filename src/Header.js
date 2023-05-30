import logo from "./img/Asset 16@4x.png";
import "./Header.css";
import Nav from "./Nav";
function Header() {
  return (
    <header className="branding">
      <img src={logo} width={150} height={50} alt="Logo" />
      <Nav />
    </header>
  );
}
export default Header;
