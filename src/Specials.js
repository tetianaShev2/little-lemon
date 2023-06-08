import "./Specials.css";
import Salad from "./img/greek salad.jpg";
import Bruschetta from "./img/bruschetta.jpg";
import Dessert from "./img/lemon cake.jpg";

function Specials() {
  return (
    <div className="specials">
      <div class="row">
        <div class="column">
          <div class="headingSpecials">
            <h2>Specials</h2>
          </div>
        </div>
        <div class="column">
          <div class="buttonMenu">
            <button>Online menu</button>
          </div>
        </div>
      </div>
      <div class="row 2">
        <div class="column">
          <div class="first article">
            <img
              src={Salad}
              width={240}
              height={180}
              className="img-fluid rounded shadow-sm border"
              alt="salad"
            />
            <h3>
              Greek Salad <span className="price">$12.99</span>
            </h3>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <strong>Order a delivery</strong>
          </div>
        </div>
        <div class="column">
          <div class="second article">
            <img
              src={Bruschetta}
              width={240}
              height={180}
              className="img-fluid rounded shadow-sm  border"
              alt="bruschetta"
            />
            <h3>
              Brushetta <span className="price"> $7.99</span>
            </h3>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil. Toppings of
              tomato, veggies, beans, cured pork, or cheese are examples of
              variations. In Italy, a brustolina grill is frequently used to
              create bruschetta.
            </p>
            <strong>Order a delivery</strong>
          </div>
        </div>
        <div class="column">
          <div class="third article">
            <img
              src={Dessert}
              width={240}
              height={180}
              className="img-fluid rounded shadow-sm  border"
              alt="dessert"
            />
            <h3>
              Lemon dessert <span className="price">$5.99</span>
            </h3>
            <p>
              Light, fluffy, and deliciously tangy, this Lemon Cake is the
              perfect dessert for any occasion. With two layers of moist
              lemon-flavored cake coated in a rich lemon-flavored cream cheese
              frosting, there's no shortage of bright lemon flavor in this
              dessert.
            </p>
            <strong>Order a delivery</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Specials;
