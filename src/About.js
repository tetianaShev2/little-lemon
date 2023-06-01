import "./About.css";
import Restaurant from "./img/restauranfood.jpg";

function About() {
  return (
    <article className="aboutUs">
      <h1>Little Lemon</h1>
      <h4>Chicago</h4>
      <section className="description">
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <img
          className="restaurantFood"
          src={Restaurant}
          width={264}
          height={185}
          alt="restaurant food"
        />
      </section>

      <button className="reservation">Reserve a table</button>
    </article>
  );
}
export default About;
