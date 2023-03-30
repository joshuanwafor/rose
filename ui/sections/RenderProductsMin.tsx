import { ProductCard } from "../organisms/ProductCard"


export const RenderProductsMin = () => {
    return <div className="container my-5">
        <div className="d-flex justify-content-between">
            <h3>Our products</h3>
            <button className="btn">View all</button>
        </div>
        <div className="row my-3">
            {[1, 2, 3, 4, 1, 2, 3, 4].map(e => {
                return <div className="col-6 col-md-3 mb-2">
                   <ProductCard/>
                </div>
            })}
        </div>
    </div>
}