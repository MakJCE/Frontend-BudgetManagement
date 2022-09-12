import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    person: {},
    token: ''
}

export const sessionDataSlice = createSlice({
    name:'sessionData',
    initialState,
    reducers:{
        setSessionData: (state, action)=>{
            state.person = action.payload.person??state.person;
            state.token = action.payload.token??state.token;
        }
    }
})

export const {setSessionData} = sessionDataSlice.actions;
export default sessionDataSlice.reducer;