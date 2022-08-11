import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    accounts: []
}

export const bankAccountSlice = createSlice({
    name:'bankAccounts',
    initialState,
    reducers:{
        setBankAccounts: (state, action)=>{
            state.accounts = action.payload;
        }
    }
})

export const {setBankAccounts} = bankAccountSlice.actions;
export default bankAccountSlice.reducer;