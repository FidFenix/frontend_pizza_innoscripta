
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
                ?
                { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};

export const removeItemFromCart = (cartItems, cartItem) => {
    return cartItems.filter((item) => item.id !== cartItem.id);
};

export const removeItemByOne = (cartItems, cartItemToRemove) => {

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id 
            ?
            { ...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
};