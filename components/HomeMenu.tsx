import Image from "next/image";
import React from "react";
import MenuCard from "./MenuCard";
import SectionTitle from "./SectionTitle";

const HomeMenu = () => {
  return (
    <section id="popular-products" className="mt-8">
      <SectionTitle subTitle="Check Out Our" title="Popular Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <MenuCard
          image="/product1.jpg"
          title="Product to be added"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda adipisci ex corrupti esse veritatis molestiae! Dignissimos assumenda neque placeat odit. Adipisci nulla animi quas dolorum, incidunt veritatis neque dolor!"
          }
          price={100}
        />
        <MenuCard
          image="/product1.jpg"
          title="Product to be added"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda adipisci ex corrupti esse veritatis molestiae! Dignissimos assumenda neque placeat odit. Adipisci nulla animi quas dolorum, incidunt veritatis neque dolor!"
          }
          price={100}
        />
        <MenuCard
          image="/product1.jpg"
          title="Product to be added"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda adipisci ex corrupti esse veritatis molestiae! Dignissimos assumenda neque placeat odit. Adipisci nulla animi quas dolorum, incidunt veritatis neque dolor!"
          }
          price={100}
        />
        <MenuCard
          image="/product1.jpg"
          title="Product to be added"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda adipisci ex corrupti esse veritatis molestiae! Dignissimos assumenda neque placeat odit. Adipisci nulla animi quas dolorum, incidunt veritatis neque dolor!"
          }
          price={100}
        />
        <MenuCard
          image="/product1.jpg"
          title="Product to be added"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda adipisci ex corrupti esse veritatis molestiae! Dignissimos assumenda neque placeat odit. Adipisci nulla animi quas dolorum, incidunt veritatis neque dolor!"
          }
          price={100}
        />
      </div>
    </section>
  );
};

export default HomeMenu;
