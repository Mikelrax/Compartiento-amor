import { sql } from '@vercel/postgres';

import { products } from "./placeholder-data";
import { Product, ShoppingCart } from './definitions';
import { v4 as uuidv4 } from 'uuid';
import { DiscountedPrices } from './definitions';
import { resolve } from 'path';

/*export async function fetchAllProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM products`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function addNewProduct(productData: ProductForm) {
  try {
    const { name, description, image_url, priceUnit } = productData;

    const data = await sql<Product>`
      INSERT INTO products (name, description, image_url, priceUnit)
      VALUES (${name}, ${description}, ${image_url}, ${priceUnit})
      RETURNING *;
    `;

    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add a new product.');
  }
}*/

//Temporal

//Vacio

export async function fetchProducts() {

  //await new Promise((resolve) => setTimeout(resolve, 5000))

  try {
    const result = await fetchLocalProducts(products);

    return result
  } catch (error) {
    console.error("Error al procesar productos:", error);
  }
}

export async function fetchLocalProducts(products: Product[]): Promise<Product[]> {
  try {
    // Esperar que todas las operaciones asíncronas terminen
    const productData = await Promise.all(products.map(async (product) => {
      const discountedPrices = await calculatePrices(product.priceUnit);
      const UUID = await generateProductUUID()
      return { UUID, ...product, discountedPrices };
    }));

    return productData;
  } catch (error) {
    console.log("Error importando productos:", error);
    throw error;
  }
}

function generateProductUUID() {
  const productUUID = uuidv4();
  return productUUID;
}

async function calculatePrices(priceUnit: number): Promise<DiscountedPrices> {
  let setPrice = priceUnit;

  let dozen = setPrice * 12;
  let quarterHundred = setPrice * 25;
  let halfHundred = setPrice * 50;
  let hundred = setPrice * 100;

  // Llama a la función applyDiscounts y devuelve su resultado
  return applyDiscounts({ dozen, quarterHundred, halfHundred, hundred });
}

function applyDiscounts(prices: DiscountedPrices): DiscountedPrices {
  // Aplica descuentos a cada precio

  prices.dozen *= 0.9; // Descuento del 20%
  prices.quarterHundred *= 0.75; // Descuento del 25%
  prices.halfHundred *= 0.65; // Descuento del 30%
  prices.hundred *= 0.60; // Descuento del 40%

  // Redondear los valores
  prices.dozen = Math.round(prices.dozen);
  prices.quarterHundred = Math.round(prices.quarterHundred);
  prices.halfHundred = Math.round(prices.halfHundred);
  prices.hundred = Math.round(prices.hundred);

  return prices;
}
