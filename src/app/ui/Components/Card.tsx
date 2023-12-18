import React, { Suspense } from 'react';
import { ProductResponse } from '@/app/lib/definitions';
import { updateCartQuantity } from '@/app/lib/shoppingCart/ShoppingCart';
import { CardSkeleton } from '../skeletons';
import { fetchProducts } from '@/app/lib/utils';
const Card = ( {
  UUID,
  name,
  description,
  discountedPrices,
  priceUnit,
  image_url }: ProductResponse) => {

  return (
    <Suspense fallback={<CardSkeleton></CardSkeleton>}>
      <div id={UUID} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">{name}</h2>
        <div className='mb-4'>
          <p className="text-center text-gray-700">{description}</p>
        </div>
        <div className='grid grid-cols-2 gap-2 mb-4'>
          <div className="text-center text-gray-700">
            <p>12 Unidades:</p>
            <p className="text-2xl font-bold">S/{discountedPrices.dozen}</p>
          </div>
          <div className="text-center text-gray-700">
            <p>25 Unidades:</p>
            <p className="text-2xl font-bold">S/{discountedPrices.quarterHundred}</p>
          </div>
          <div className="text-center text-gray-700">
            <p>50 Unidades:</p>
            <p className="text-2xl font-bold">S/{discountedPrices.halfHundred}</p>
          </div>
          <div className="text-center text-gray-700">
            <p>100 Unidades:</p>
            <p className="text-2xl font-bold">S/{discountedPrices.hundred}</p>
          </div>
        </div>
        <div className='mb-4'>
          <img
            src={image_url}
            alt="Placeholder Image"
            className="rounded mx-auto"
          />
        </div>
        <div className="flex justify-end">
        </div>
      </div>
    </Suspense>
  );
};
   

export default Card;