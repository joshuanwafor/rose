import Link from "next/link";
import { Product } from "../../src/sdk/storefront";
import { formatCurrency } from "../../lib/utils";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      //@ts-ignore
      href={`/products/${product.id}`}
    >
      <div
        style={{
          paddingTop: "100%",
          backgroundColor: "ghostwhite",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${product.image})`,
          backgroundRepeat: "no-repeat",
        }}
        className=""
      />
      <p className="mt-2">{product.title}</p>
      <p>{formatCurrency(product.sale_price)}</p>
    </Link>
  );
};
