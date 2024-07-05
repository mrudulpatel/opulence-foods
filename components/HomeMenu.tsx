import React from "react";
import MenuCard from "./MenuCard";
import SectionTitle from "./SectionTitle";
import { products } from "@/constants";

const HomeMenu = () => {
  return (
    <section id="popular-products" className="mt-8">
      <SectionTitle subTitle="Check Out Our" title="Popular Products And Newly Launched Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {products?.map(
          (product) =>
            (product.type === "popular" || product.type === "new") && (
              <MenuCard
                description={product.description.split(".")[0] + "."}
                images={product.images}
                key={product?.productId}
                title={product.title}
                type={product.type}
              />
            )
        )}
      </div>
    </section>
  );
};

export default HomeMenu;
