
/*'use client';*/

import Card from "../ui/Components/Card";
import Snow from "../ui/Components/Chrismas_Components/Snow_effect/Snow";
import "./page.css"
import { fetchProducts } from "../lib/utils";
import { ProductResponse } from "../lib/definitions";
import { shoppingCartItems } from "../lib/shoppingCart/ShoppingCart";
import { Suspense } from "react";
/*import { useState } from "react";*/

export default async function Catalog() {
  const productDisplayData = await fetchProducts() as ProductResponse[];
/*
  const [openCart, setOpenCart] = useState(false);

  function handleClick() {setOpenCart(true)}
*/

  return (
    <>
      <div className="catalog-container">
        <div className="container mx-auto p-4 rounded-lg">
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center mb-2 pb-5 md:mb-0">
                <img src="https://via.placeholder.com/100x50?text=Logo" alt="Logo" className="mr-4" />
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Ejemplo: Brownie"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-64 mr-2"
                />
                <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">Filtrar</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6">
              {productDisplayData?.map((display) => {
                return (
                  <div key={display.UUID}>
                    <Card
                      UUID={display.UUID}
                      name={display.name}
                      description={display.description}
                      discountedPrices={display.discountedPrices}
                      id={display.id}
                      image_url={display.image_url}
                      priceUnit={display.priceUnit} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Snow></Snow>
    </>
  )
}
