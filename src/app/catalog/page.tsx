
/*'use client';*/

import Card from "../ui/Components/Card";
import Snow from "../ui/Components/Chrismas_Components/Snow_effect/Snow";
import "./page.css"
import { fetchProducts } from "../lib/utils";
import { ProductResponse } from "../lib/definitions";
import { shoppingCartItems } from "../lib/shoppingCart/ShoppingCart";

export default async function Catalog() {
  const productDisplayData = await fetchProducts() as ProductResponse[];

  return (
    <>
      <div className="catalog-container">
        <div className="container mx-auto p-4 rounded-lg">
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 rounded-3xl">
              <a href="/">
                <div className="flex items-center mb-2 pb-5 md:mb-0">
                  <img src="https://i.imgur.com/21h4gg8.jpg" alt="Logo" className="mr-4 rounded-full" />
                </div>
              </a>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Ejemplo: Brownie"
                  className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-64 mr-2"
                  disabled
                />
                <button
                  className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                  disabled
                >
                  Filtrar
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 pb-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                <div className='mb-4'>
                  <p className="text-center text-gray-700">
                    <strong>¡Atención!</strong> Este catálogo muestra actualmente solo los precios y no permite realizar compras directamente en línea.
                    Te invitamos a ponerte en contacto con nuestro vendedor a través de WhatsApp o Messenger para realizar tus pedidos.
                    Estamos trabajando para implementar la funcionalidad de compra en línea próximamente. ¡Gracias por tu comprensión!
                  </p>
                </div>
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
