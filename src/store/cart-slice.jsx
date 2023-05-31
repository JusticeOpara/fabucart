import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./userinterface-slice";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            // to check if the item is already available

            const existingProduct = state.itemsList.find(item => item.id === newItem.id);

            console.log(existingProduct, "--product wey dey ground")
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    totalPrice: newItem.price,
                    quantity: 1,
                    name: newItem.name,
                    price: newItem.price,
                    imgURL: newItem.imgURL
                })
                state.totalQuantity++
            }

        },

        removeCart(state, action) {
            // state.changed = true;
            const id = action.payload
            const existingItem = state.itemsList.find(item => item.id === id);

            if (existingItem.quantity == 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

        },

        setShowCart(state) {
            state.showCart = !state.showCart
        },
        sendCartData(cart) {
            return (dispatch) => {
                uiActions.showNotification({
                    open: true,
                    message: "Sent Request to database sucessful",
                    type: "sucesss",
                })
            }
        }
    }

})

export const cartActions = cartSlice.actions
export default cartSlice