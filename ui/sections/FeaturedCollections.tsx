import { observer } from "mobx-react";
import { CollectionCard } from "../organisms/CollectionCard";
import { ProductCard } from "../organisms/ProductCard";
import { pageDataManager } from "../../src/store/pageData";
import Link from "next/link";

export const FeaturedCollections = observer(() => {
  if (pageDataManager.collections.length == 0) {
    return <div></div>;
  }
  return (
    <div className="container my-5">
      <h3>Featured collections</h3>
      <div className="row my-3">
        {pageDataManager.collections.map((e) => {
          return (
            <div className="col-6 col-md-3">
              <Link
                //@ts-ignore
                href={`/catalog?collection_id=${e.id}`}
              >
                <CollectionCard collection={e} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});
