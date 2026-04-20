import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <Container className="space-y-12 py-8 sm:py-10 lg:py-14">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/" className="transition hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/category/${product.category.id}`}
          className="transition hover:text-foreground"
        >
          {product.category.name}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
        <div className="lg:col-span-7">
          <Gallery images={product.images} />
        </div>
        <div className="lg:col-span-5">
          <Info data={product} />
        </div>
      </div>

      <div className="divider" />

      <ProductList
        eyebrow="You may also like"
        title="Related items"
        items={suggestedProducts.filter((p) => p.id !== product.id)}
      />
    </Container>
  );
};

export default ProductPage;
