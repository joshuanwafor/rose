/* tslint:disable */
/* eslint-disable */
/**
 * Storefront Docs
 * Basic store access features
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'country': string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'address': string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'postal_code': string;
}
/**
 * 
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'type': CollectionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'collection_context': CollectionCollectionContextEnum;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'collection_scope': CollectionCollectionScopeEnum;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'handle': string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'parent_id': string;
    /**
     * 
     * @type {string}
     * @memberof Collection
     */
    'image': string;
}

export const CollectionTypeEnum = {
    Manual: 'MANUAL',
    Automatic: 'AUTOMATIC'
} as const;

export type CollectionTypeEnum = typeof CollectionTypeEnum[keyof typeof CollectionTypeEnum];
export const CollectionCollectionContextEnum = {
    Pos: 'POS',
    Online: 'ONLINE',
    Global: 'GLOBAL'
} as const;

export type CollectionCollectionContextEnum = typeof CollectionCollectionContextEnum[keyof typeof CollectionCollectionContextEnum];
export const CollectionCollectionScopeEnum = {
    Expence: 'EXPENCE',
    Product: 'PRODUCT',
    Brand: 'BRAND',
    Collection: 'COLLECTION',
    Customer: 'CUSTOMER',
    Global: 'GLOBAL'
} as const;

export type CollectionCollectionScopeEnum = typeof CollectionCollectionScopeEnum[keyof typeof CollectionCollectionScopeEnum];

/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof Order
     */
    'items': Array<OrderItem>;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'sum_total': number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    'total_received': number;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'payment_strategy': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'delivery_method': string;
    /**
     * 
     * @type {Address}
     * @memberof Order
     */
    'delivery_address': Address;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'delivery_status': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'notes': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Order
     */
    'updated_at': string;
}
/**
 * 
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * 
     * @type {string}
     * @memberof OrderItem
     */
    'image': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItem
     */
    'product_name': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItem
     */
    'product_id': string;
    /**
     * 
     * @type {string}
     * @memberof OrderItem
     */
    'product_variant_id': string;
    /**
     * 
     * @type {number}
     * @memberof OrderItem
     */
    'quantity': number;
    /**
     * 
     * @type {number}
     * @memberof OrderItem
     */
    'cost': number;
    /**
     * 
     * @type {number}
     * @memberof OrderItem
     */
    'amount': number;
}
/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    'meta_fields': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'handle': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'body_html': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'summary': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'body': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'vendor': string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'stock_quantity': number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'product_unit': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'product_type': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'product_context': ProductProductContextEnum;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'tags': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    'sales_channel': Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    'images': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'image': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Product
     */
    'collections': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'options': string;
    /**
     * 
     * @type {object}
     * @memberof Product
     */
    'metrics': object;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'status': ProductStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'cost_price': number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'sale_price': number;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'discount_price': number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'updated_at': string;
}

export const ProductProductContextEnum = {
    Pos: 'POS',
    Online: 'ONLINE',
    Global: 'GLOBAL'
} as const;

export type ProductProductContextEnum = typeof ProductProductContextEnum[keyof typeof ProductProductContextEnum];
export const ProductStatusEnum = {
    Draft: 'DRAFT',
    Active: 'ACTIVE',
    Archive: 'ARCHIVE'
} as const;

export type ProductStatusEnum = typeof ProductStatusEnum[keyof typeof ProductStatusEnum];

/**
 * 
 * @export
 * @interface PublishOrderDto
 */
export interface PublishOrderDto {
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof PublishOrderDto
     */
    'items': Array<OrderItem>;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'customer_id': string;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'payment_strategy': PublishOrderDtoPaymentStrategyEnum;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'payment_method': PublishOrderDtoPaymentMethodEnum;
    /**
     * Initial amount paid
     * @type {number}
     * @memberof PublishOrderDto
     */
    'payment_of': number;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'branch_id': string;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'org_id': string;
    /**
     * 
     * @type {string}
     * @memberof PublishOrderDto
     */
    'initiated_by': PublishOrderDtoInitiatedByEnum;
}

export const PublishOrderDtoPaymentStrategyEnum = {
    Full: 'FULL',
    Parts: 'PARTS'
} as const;

export type PublishOrderDtoPaymentStrategyEnum = typeof PublishOrderDtoPaymentStrategyEnum[keyof typeof PublishOrderDtoPaymentStrategyEnum];
export const PublishOrderDtoPaymentMethodEnum = {
    Cash: 'CASH',
    BankTransfer: 'BANK_TRANSFER',
    Pos: 'POS',
    Paystack: 'PAYSTACK'
} as const;

export type PublishOrderDtoPaymentMethodEnum = typeof PublishOrderDtoPaymentMethodEnum[keyof typeof PublishOrderDtoPaymentMethodEnum];
export const PublishOrderDtoInitiatedByEnum = {
    User: 'USER',
    Staff: 'STAFF'
} as const;

export type PublishOrderDtoInitiatedByEnum = typeof PublishOrderDtoInitiatedByEnum[keyof typeof PublishOrderDtoInitiatedByEnum];


/**
 * CollectionControllerApi - axios parameter creator
 * @export
 */
export const CollectionControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectionControllerGet: async (domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('collectionControllerGet', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/collections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectionControllerGetById: async (item: string, domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'item' is not null or undefined
            assertParamExists('collectionControllerGetById', 'item', item)
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('collectionControllerGetById', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/collections/{item}`
                .replace(`{${"item"}}`, encodeURIComponent(String(item)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CollectionControllerApi - functional programming interface
 * @export
 */
export const CollectionControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CollectionControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async collectionControllerGet(domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Collection>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.collectionControllerGet(domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async collectionControllerGetById(item: string, domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.collectionControllerGetById(item, domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CollectionControllerApi - factory interface
 * @export
 */
export const CollectionControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CollectionControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectionControllerGet(domain: string, options?: any): AxiosPromise<Array<Collection>> {
            return localVarFp.collectionControllerGet(domain, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectionControllerGetById(item: string, domain: string, options?: any): AxiosPromise<Collection> {
            return localVarFp.collectionControllerGetById(item, domain, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CollectionControllerApi - object-oriented interface
 * @export
 * @class CollectionControllerApi
 * @extends {BaseAPI}
 */
export class CollectionControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionControllerApi
     */
    public collectionControllerGet(domain: string, options?: AxiosRequestConfig) {
        return CollectionControllerApiFp(this.configuration).collectionControllerGet(domain, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} item 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionControllerApi
     */
    public collectionControllerGetById(item: string, domain: string, options?: AxiosRequestConfig) {
        return CollectionControllerApiFp(this.configuration).collectionControllerGetById(item, domain, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OrderControllerApi - axios parameter creator
 * @export
 */
export const OrderControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerGet: async (domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('orderControllerGet', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/order`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} item 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerGetById: async (item: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'item' is not null or undefined
            assertParamExists('orderControllerGetById', 'item', item)
            const localVarPath = `/api/catalog/storefront/order/{item}`
                .replace(`{${"item"}}`, encodeURIComponent(String(item)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PublishOrderDto} publishOrderDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerPublish: async (publishOrderDto: PublishOrderDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'publishOrderDto' is not null or undefined
            assertParamExists('orderControllerPublish', 'publishOrderDto', publishOrderDto)
            const localVarPath = `/api/catalog/storefront/order`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(publishOrderDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrderControllerApi - functional programming interface
 * @export
 */
export const OrderControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrderControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderControllerGet(domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Order>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderControllerGet(domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} item 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderControllerGetById(item: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderControllerGetById(item, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PublishOrderDto} publishOrderDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderControllerPublish(publishOrderDto: PublishOrderDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Order>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderControllerPublish(publishOrderDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrderControllerApi - factory interface
 * @export
 */
export const OrderControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrderControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerGet(domain: string, options?: any): AxiosPromise<Array<Order>> {
            return localVarFp.orderControllerGet(domain, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} item 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerGetById(item: string, options?: any): AxiosPromise<Order> {
            return localVarFp.orderControllerGetById(item, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PublishOrderDto} publishOrderDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderControllerPublish(publishOrderDto: PublishOrderDto, options?: any): AxiosPromise<Order> {
            return localVarFp.orderControllerPublish(publishOrderDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrderControllerApi - object-oriented interface
 * @export
 * @class OrderControllerApi
 * @extends {BaseAPI}
 */
export class OrderControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderControllerApi
     */
    public orderControllerGet(domain: string, options?: AxiosRequestConfig) {
        return OrderControllerApiFp(this.configuration).orderControllerGet(domain, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} item 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderControllerApi
     */
    public orderControllerGetById(item: string, options?: AxiosRequestConfig) {
        return OrderControllerApiFp(this.configuration).orderControllerGetById(item, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PublishOrderDto} publishOrderDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderControllerApi
     */
    public orderControllerPublish(publishOrderDto: PublishOrderDto, options?: AxiosRequestConfig) {
        return OrderControllerApiFp(this.configuration).orderControllerPublish(publishOrderDto, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ProductControllerApi - axios parameter creator
 * @export
 */
export const ProductControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productControllerGet: async (domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('productControllerGet', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/products`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productControllerGetById: async (item: string, domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'item' is not null or undefined
            assertParamExists('productControllerGetById', 'item', item)
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('productControllerGetById', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/products/{item}`
                .replace(`{${"item"}}`, encodeURIComponent(String(item)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductControllerApi - functional programming interface
 * @export
 */
export const ProductControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productControllerGet(domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Product>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productControllerGet(domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productControllerGetById(item: string, domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Product>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productControllerGetById(item, domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductControllerApi - factory interface
 * @export
 */
export const ProductControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productControllerGet(domain: string, options?: any): AxiosPromise<Array<Product>> {
            return localVarFp.productControllerGet(domain, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} item 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productControllerGetById(item: string, domain: string, options?: any): AxiosPromise<Product> {
            return localVarFp.productControllerGetById(item, domain, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductControllerApi - object-oriented interface
 * @export
 * @class ProductControllerApi
 * @extends {BaseAPI}
 */
export class ProductControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApi
     */
    public productControllerGet(domain: string, options?: AxiosRequestConfig) {
        return ProductControllerApiFp(this.configuration).productControllerGet(domain, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} item 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllerApi
     */
    public productControllerGetById(item: string, domain: string, options?: AxiosRequestConfig) {
        return ProductControllerApiFp(this.configuration).productControllerGetById(item, domain, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SiteControllerApi - axios parameter creator
 * @export
 */
export const SiteControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        siteControllerGet: async (domain: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('siteControllerGet', 'domain', domain)
            const localVarPath = `/api/catalog/storefront/site`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (domain !== undefined) {
                localVarQueryParameter['domain'] = domain;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SiteControllerApi - functional programming interface
 * @export
 */
export const SiteControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SiteControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async siteControllerGet(domain: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Order>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.siteControllerGet(domain, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SiteControllerApi - factory interface
 * @export
 */
export const SiteControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SiteControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} domain 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        siteControllerGet(domain: string, options?: any): AxiosPromise<Array<Order>> {
            return localVarFp.siteControllerGet(domain, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SiteControllerApi - object-oriented interface
 * @export
 * @class SiteControllerApi
 * @extends {BaseAPI}
 */
export class SiteControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} domain 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SiteControllerApi
     */
    public siteControllerGet(domain: string, options?: AxiosRequestConfig) {
        return SiteControllerApiFp(this.configuration).siteControllerGet(domain, options).then((request) => request(this.axios, this.basePath));
    }
}


