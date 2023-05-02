import { CollectionControllerApi, ProductControllerApi } from "../src/sdk/storefront";



export async function getPageData(domain) {
    let product_response = await new ProductControllerApi().productControllerGet(domain);
    let collection_response = await new CollectionControllerApi().collectionControllerGet(domain);
    return {
        //@ts-ignore
        site_meta: product_response.data.site_meta,
        //@ts-ignore
        collections: collection_response.data.docs ?? [],
        //@ts-ignore
        products: product_response.data.docs ?? [],
    }
}