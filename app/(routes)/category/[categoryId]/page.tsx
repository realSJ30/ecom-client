import React from "react";
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <Container className="space-y-10 py-8 sm:py-10 lg:py-14">
      <Billboard data={category.billboard} variant="inline" />

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Category
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {category?.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </div>
        <MobileFilters sizes={sizes} colors={colors} />
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28 space-y-6 rounded-2xl border border-border bg-surface-1 p-5">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                Filters
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Narrow the lineup to what you need.
              </p>
            </div>
            <Filter valueKey="sizeId" name="Size" data={sizes} />
            <Filter valueKey="colorId" name="Color" data={colors} />
          </div>
        </aside>

        <div className="lg:col-span-9">
          {products.length === 0 ? (
            <NoResult />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
