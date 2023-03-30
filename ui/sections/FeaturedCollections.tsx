import { CollectionCard } from "../organisms/CollectionCard"
import { ProductCard } from "../organisms/ProductCard"


export const FeaturedCollections = () => {
    return <div className="container my-5">
        <h3>Featured collections</h3>
        <div className="row my-3">
            {[1, 2, 3, 4].map(e => {
                return <div className="col-6 col-md-3">
                    <CollectionCard />
                </div>
            })}
        </div>

    </div>
}