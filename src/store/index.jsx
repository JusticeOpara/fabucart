import { configureStore } from "@reduxjs/toolkit";
import cartSlice,{ initialStateWithCart } from "./cart-slice";
import uiSlice from "./userinterface-slice";
import modalSlice from "./modal-slice";


const store = configureStore({

    reducer: {

        cart: cartSlice.reducer,
        ui:uiSlice.reducer,
        modal:modalSlice.reducer
    },
    preloadedState: {
        cart:initialStateWithCart,
        // other initial states...
      }

})
export default store