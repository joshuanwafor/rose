import { pageDataManager } from "../../src/store/pageData"
import { ProductCard } from "../organisms/ProductCard"


export const FeaturedProducts = () => {
    return <div className="container my-5">
        <h3>Featured Products</h3>
        <div className="row my-3">
            {pageDataManager.products.map(e => {
                return <div className="col-6 col-md-3 mb-2">
                    <ProductCard product={e} />
                </div>
            })}
        </div>
    </div>
}