export type Product = {
    id: string;
    name: string;
    description: string;
    image_url: string;
    priceUnit: number;
};

export interface DiscountedPrices {
    dozen: number;
    quarterHundred: number;
    halfHundred: number;
    hundred: number;
  }

export interface ProductResponse {
    UUID: string;
    id: string;
    name: string;
    description: string;
    image_url: string;
    priceUnit: number;
    discountedPrices: {
        dozen: number;
        quarterHundred: number;
        halfHundred: number;
        hundred: number;
    };
}

export interface ShoppingCart {
    uuid: string;
    product: {
      price: number;
    };
    quantity: number;
  }
/*
export type ProductsTable = {
    id: string;
    name: string;
    description: string;
    image_url: string;
    priceUnit: number;
};

export type FormattedProductsTable = {
    id: string;
    name: string;
    description: string;
    image_url: string;
    priceUnit: number;
};

export type ProductField = {
    id: string;
    name: string;
};

export type ProductForm = {
    id: string;
    name: string;
    description: string;
    image_url: string;
    priceUnit: number;
};*/
