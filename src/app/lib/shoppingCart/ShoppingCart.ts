import { ShoppingCart } from "../definitions";

export const shoppingCartItems: ShoppingCart[] = [];

export const updateCartQuantity = (
    uuid: string,
    price: number,
    quantity: number
) => {

    // Busca el índice del elemento en el carrito
    const index = shoppingCartItems.findIndex(item => item.uuid === uuid);

    // Si ya existe y la cantidad es cero, elimina el elemento
    if (index !== -1) {
        shoppingCartItems.splice(index, 1);
        console.log("element deteled")
    } else if (quantity > 0) {
        // Si no existe, actualiza o agrega un nuevo elemento
        const newItem: ShoppingCart = {
            uuid,
            product: { price },
            quantity,
        };
        shoppingCartItems.push(newItem);
        console.log(shoppingCartItems)
    }
};