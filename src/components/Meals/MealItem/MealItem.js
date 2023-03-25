import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <span>{props.description}</span>
      <span>${props.price}</span>
    </div>
  );
};

export default MealItem;
