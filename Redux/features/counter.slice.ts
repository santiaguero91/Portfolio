import { createSlice} from "@reduxjs/toolkit"


const initialState = {
    counter:1,
    popup:0
}

export const counterSlice = createSlice({
name:"counter",
initialState,
reducers:{
    increment:(state)=>{
        state.counter===1? state.counter++ : state.counter--
    },
    makePopUp:(state)=>{
        state.popup += 1
    },
    exitPopUp:(state)=>{
        state.popup -= 1
    },

}
})

export const {increment, makePopUp,exitPopUp} = counterSlice.actions
export default counterSlice.reducer