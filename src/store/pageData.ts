import { makeAutoObservable, runInAction } from "mobx";
import { Collection, Product } from "../sdk/storefront";

class PageData {
    products: Product[] = []
    collections: Collection[] = []
    site_meta: any = {}
    constructor() {
        makeAutoObservable(this);
    }
    setData(site: any, products: Product[], collections: Collection[]) {
        runInAction(() => {
            this.collections = collections;
            this.products = products;
            this.site_meta = site;
        })
    }
}

export const pageDataManager = new PageData();