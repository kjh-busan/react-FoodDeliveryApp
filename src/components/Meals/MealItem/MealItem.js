import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    // console.log("addItemToCartHandler amount : ", amount);
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
