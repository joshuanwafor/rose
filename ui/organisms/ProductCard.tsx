import { Product } from "../../src/sdk/storefront"


export const ProductCard = ({ product }: { product: Product }) => {
    return <a
        //@ts-ignore
        href={`/products/${product.id}`}>
        <div style={{
            paddingTop: "100%",
            backgroundColor:"ghostwhite",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${product.image})`,
            backgroundRepeat:"no-repeat"
        }}  className="border"/>
        <p className="mt-2">{product.title}</p>
        <p>{product.sale_price}</p>
    </a>
}