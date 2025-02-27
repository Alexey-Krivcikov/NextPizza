import {
  Container,
  ProductForm,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

type tParams = Promise<{ id: string[] }>;

export default async function ProductPage({ params }: { params: tParams }) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
}
