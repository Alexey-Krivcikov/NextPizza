"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import * as CartDetails from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  className?: string;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

export const CartDrawerItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  quantity,
  className,
  details,
  onClickCountButton,
  onClickRemove,
  disabled,
}) => {
  return (
    <div
      className={cn(
        "flex bg-white p-5 gap-6",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className
      )}
    >
      <CartDetails.Image src={imageUrl} />

      <div className="flex-1">
        <CartDetails.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CartDetails.CountButton
            onClick={onClickCountButton}
            value={quantity}
          />

          <div className="flex items-center gap-3">
            <CartDetails.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
