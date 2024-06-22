import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/constants";
import React from "react";

const ProductsPage = () => {
  return (
    <section id="all-products" className="mt-8">
      <SectionTitle subTitle="" title="All Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {products?.map((product) => (
          <MenuCard
            description={product.description.split('. ')[0]+"."}
            image={product.image}
            key={product?.productId}
            title={product.title}
            type={product.type}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
