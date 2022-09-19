import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    badgesList: []
}

export const badgeSlice = createSlice({
    name:'badges',
    initialState,
    reducers:{
        setBadges: (state, action)=>{
            state.badgesList = action.payload;
        }
    }
})

export const {setBadges} = badgeSlice.actions;
export default badgeSlice.reducer;