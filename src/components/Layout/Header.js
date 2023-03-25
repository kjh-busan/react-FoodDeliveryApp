import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImg from "../assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodDelivery made in React</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of delicios food!" />
      </div>
    </Fragment>
  );
};

export default Header;
