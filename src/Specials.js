import "./Specials.css";
import Salad from "./img/greek salad.jpg";
import Bruschetta from "./img/bruschetta.jpg";
import Dessert from "./img/lemon dessert.jpg";

function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <button>Online menu</button>

      <article>
        <img
          src={Salad}
          width={264}
          height={185}
          className="img-fluid rounded shadow-sm  border"
          alt="salad"
        />
        <h3>
          Greek Salad <span className="price">$12.99</span>
        </h3>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <strong>Order a delivery</strong>
      </article>
      <article>
        <img
          src={Bruschetta}
          width={264}
          height={185}
          className="img-fluid rounded shadow-sm  border"
          alt="bruschetta"
        />
        <h3>
          Brushetta <span className="price"> $7.99</span>
        </h3>
        <p>
          Our Bruschetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil. Toppings of tomato,
          veggies, beans, cured pork, or cheese are examples of variations. In
          Italy, a brustolina grill is frequently used to create bruschetta.
        </p>
        <strong>Order a delivery</strong>
      </article>
      <article>
        <img
          src={Dessert}
          width={264}
          height={185}
          className="img-fluid rounded shadow-sm  border"
          alt="dessert"
        />
        <h3>
          Lemon dessert <span className="price">$11.99</span>
        </h3>
        <p>
          Light, fluffy, and deliciously tangy, this Lemon Cake is the perfect
          dessert for any occasion. With two layers of moist lemon-flavored cake
          coated in a rich lemon-flavored cream cheese frosting, there's no
          shortage of bright lemon flavor in this dessert.
        </p>
        <strong>Order a delivery</strong>
      </article>
    </section>
  );
}
export default Specials;
