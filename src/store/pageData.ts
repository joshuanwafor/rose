import { makeAutoObservable, runInAction } from "mobx";
import { Collection, Product } from "../sdk/storefront";

class PageData {
  branches: any[] = [];
  products: Product[] = [];
  product: Product;
  collections: Collection[] = [];
  site_meta: any = {};
  constructor() {
    makeAutoObservable(this);
  }
  setData(site: any, products: Product[], collections: Collection[]) {
    runInAction(() => {
      this.collections = collections ?? [];
      this.products = products ?? [];
      this.site_meta = site;
    });
  }

  setBranches(branches: any[]) {
    runInAction(() => {
      this.branches = branches ?? [];
    });
  }

  setCurrentProduct(product: Product) {
    runInAction(() => {
      this.product = product;
    });
  }
}

export const pageDataManager = new PageData();
