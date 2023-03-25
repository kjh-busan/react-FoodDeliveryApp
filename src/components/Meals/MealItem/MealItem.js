import React from "react";
import classes from "./MealItem.module.css ";

const MealItem = (props) => {
  return <div className={classes.meal}>props.name</div>;
};

export default MealItem;
