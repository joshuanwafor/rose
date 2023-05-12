import Link from "next/link";
import { pageDataManager } from "../../src/store/pageData";
import { ProductCard } from "../organisms/ProductCard";
import { observer } from "mobx-react";

export const RenderProductsMin = observer(() => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3>Our products</h3>
        <Link href={"/catalog"}>
          <button className="btn">View all</button>
        </Link>
      </div>
      <div className="row my-3">
        {pageDataManager.products.map((e) => {
          return (
            <div className="col-6 col-md-3 mb-2">
              <ProductCard product={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export const RenderFeaturedProducts = observer(() => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3>Featured products</h3>
      </div>
      <div className="row my-3">
        {pageDataManager.products.filter(e=>e.is_featured).map((e) => {
          return (
            <div className="col-6 col-md-3 mb-2">
              <ProductCard product={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export const RenderRelatedProducts = observer(({ id }: { id: string }) => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <h3>Related products</h3>
      </div>
      <div className="row my-3">
        {pageDataManager.products.map((e) => {
          return (
            <div className="col-6 col-md-3 mb-2">
              <ProductCard product={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
});
