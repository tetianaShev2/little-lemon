import Restaurant from "./img/restauranfood.jpg";
import "./Main.css";
function Main() {
  return (
    <main>
      <article className="aboutUs">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <section className="description">
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <img
            className="restaurantFood"
            src={Restaurant}
            width={250}
            height={152}
            alt="restaurant food"
          />
        </section>

        <button classname="reservation">Reserve a table</button>
      </article>
    </main>
  );
}
export default Main;
