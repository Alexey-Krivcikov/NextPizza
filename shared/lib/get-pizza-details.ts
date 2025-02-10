import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from ".";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
  type: PizzaType,
  size: PizzaSize,
) => {
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;
  const totalPrice = calcTotalPizzaPrice(items, ingredients, selectedIngredients, type, size);

  return {textDetails, totalPrice};
}