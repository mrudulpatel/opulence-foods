declare module "@heroicons/*";

type Product = {
    productId?: string;
    type?: "popular" | "new" | "regular";
    title: string;
    description: string;
    image: string;
};