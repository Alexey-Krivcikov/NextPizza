import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Calculate total price of pizza with selected ingredients
 *
 * @param items - list of products
 * @param ingredients - list of ingredients
 * @param selectedIngredients - set of IDs of selected ingredients
 * @param type - type of pizza
 * @param size - size of pizza
 * @returns number - total price of pizza
 */
export const calcTotalPizzaPrice = (
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
  type: PizzaType,
  size: PizzaSize,
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, item) => acc + item.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
