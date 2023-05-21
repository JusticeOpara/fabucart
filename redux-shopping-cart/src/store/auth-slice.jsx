import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",

    initialState: {IsLoggedIn : false},

    reducers :{
     loggedIn(state){
         state.IsLoggedIn = true
     },
     loggedOut(state){
         state.IsLoggedOut = false
     }
    }

})

export const authActions = authSlice.actions
export default authSlice  