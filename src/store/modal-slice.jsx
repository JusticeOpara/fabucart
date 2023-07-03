import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",

    initialState: {
        IsOpen: false,
        contentType: 'login' || 'signup', // 'login' or 'signup'
    },

    reducers: {

        openModal(state) {
            state.IsOpen = true
           
        },

        closeModal(state) {
            state.IsOpen = false
            
        },
        setModalContent(state,action){
            state.contentType = action.payload;
        }
    }

})

export const modalActions = modalSlice.actions
export default modalSlice  