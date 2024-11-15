"use client";

import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";

const MenuCard = ({images, title, description, type}: Product) => {
    return (
        <div className="bg-oldRose p-4 shadow-xl text-xl rounded-lg text-center hover:bg-ecru transition-colors group">
            {type === "new" && (
                <span
                    className="flex items-start w-fit p-2 mb-3 text-base font-bold leading-none whitespace-nowrap align-baseline rounded-full text-primary bg-ecru group-hover:bg-primary group-hover:text-ecru">
          Just launched
        </span>
            )}
            {type === "popular" && (
                <span
                    className="flex items-start w-fit p-2 mb-3 text-base font-bold leading-none whitespace-nowrap align-baseline rounded-full text-primary bg-ecru group-hover:bg-primary group-hover:text-ecru">
          Popular
        </span>
            )}
            <Carousel>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="rounded-lg">
                            <img
                                src={image.toString()}
                                alt={title}
                                // width={452}
                                // height={679}
                                // style={{width: "auto", height: "auto"}}
                                className="rounded-lg"
                                // objectFit="cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <h4 className="font-semibold my-2 text-2xl text-white">{title}</h4>
            <p className=" text-lg">{description}</p>
            <button
                className=" bg-primary group-hover:text-ecru transition-colors  shadow-sm px-8 text-white rounded-full py-2 !mt-4">
                <Link href={`/products/${title.split(" ").join("-").toLowerCase()}`}>
                    Shop Now
                </Link>
            </button>
        </div>
    );
};

export default MenuCard;
