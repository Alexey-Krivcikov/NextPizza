"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/shared/components/ui/dialog";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            This dialog displays details about the selected product.
          </DialogDescription>
        </VisuallyHidden>

        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
