import { pizzaSizes } from '@/shared/constants/pizza';
import { PizzaType } from "../constants/pizza";
import { ProductItem } from '@prisma/client';
import { Variant } from '../components/shared/group-variants';

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
    const filteresPizzasByType = items.filter(item => item.pizzaType === type);

    return pizzaSizes.map((item) => ({
      name: item.name,
      value: item.value,
      disabled: !filteresPizzasByType.some(pizza => Number(pizza.size) === Number(item.value))
    }))
};