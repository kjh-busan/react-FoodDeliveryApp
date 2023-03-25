import React from "react";
import Card from "../UI/Card";
import { DUMMY_MEALS } from "./dummy-meals";
import classes from "./AvaibleMeals.module.css";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
