import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    transfers: []
}

export const transferSlice = createSlice({
    name:'transfers',
    initialState,
    reducers:{
        setTransfers: (state, action)=>{
            state.transfers = action.payload;
        },
        addTransfer: (state, action)=>{
            state.transfers.push(action.payload);
        }
    }
})

export const {setTransfers, addTransfer} = transferSlice.actions;
export default transferSlice.reducer;