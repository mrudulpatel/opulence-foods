import Image from "next/image";
import Link from "next/link";

const MenuCard = ({ image, title, description, type }: Product) => {
  return (
    <div className="bg-oldRose p-4 shadow-xl text-xl rounded-lg text-center hover:bg-ecru transition-colors group">
      {type === "new" && (
        <span className="flex items-start w-fit p-2 mb-3 text-base font-bold leading-none whitespace-nowrap align-baseline rounded-full text-primary bg-ecru group-hover:bg-primary group-hover:text-ecru">
          Just launched
        </span>
      )}
      {type === "popular" && (
        <span className="flex items-start w-fit p-2 mb-3 text-base font-bold leading-none whitespace-nowrap align-baseline rounded-full text-primary bg-ecru group-hover:bg-primary group-hover:text-ecru">
          Popular
        </span>
      )}
      <Image
        src={image}
        alt={title}
        width={452}
        height={679}
        objectFit="cover"
      />
      <h4 className="font-semibold my-2 text-2xl text-white">{title}</h4>
      <p className=" text-lg">{description}</p>
      <button className=" bg-primary group-hover:text-ecru transition-colors  shadow-sm px-8 text-white rounded-full py-2 !mt-4">
        <Link href={`/products/${title.split(" ").join("-").toLowerCase()}`}>
          Shop Now
        </Link>
      </button>
    </div>
  );
};

export default MenuCard;
