import { observer } from "mobx-react"
import { CollectionCard } from "../organisms/CollectionCard"
import { ProductCard } from "../organisms/ProductCard"
import { pageDataManager } from "../../src/store/pageData"


export const FeaturedCollections = observer( () => {
    return <div className="container my-5">
        <h3>Featured collections</h3>
        <div className="row my-3">
            {pageDataManager.collections.map(e => {
                return <div className="col-6 col-md-3">
                    <CollectionCard />
                </div>
            })}
        </div>

    </div>
})