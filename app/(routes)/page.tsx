import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import CollectionsGrid from "@/components/collections-grid";
import FeatureStrip from "@/components/feature-strip";
import ProductList from "@/components/product-list";
import Spotlight from "@/components/spotlight";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("ae6a06bb-2bd6-4121-a203-42752a53c7ca");
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  const featuredProduct = products?.[0];

  return (
    <Container className="space-y-16 py-8 sm:py-10 lg:space-y-24 lg:py-14">
      <Billboard data={billboard} />

      <FeatureStrip />

      <Spotlight product={featuredProduct} />

      <CollectionsGrid categories={categories} />

      <ProductList
        eyebrow="Just landed"
        title="Featured products"
        description="Fresh drops from across the collection — hand-picked, ready to ship."
        items={products}
        ctaLabel="View everything"
        ctaHref={categories?.[0] ? `/category/${categories[0].id}` : "/"}
      />
    </Container>
  );
};

export default HomePage;
