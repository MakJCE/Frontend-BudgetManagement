import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || ''
}

export const sessionDataSlice = createSlice({
    name:'sessionData',
    initialState,
    reducers:{
        setSessionData: (state, action)=>{
            state.username = action.payload.username;
            state.password = action.payload.password;
        }
    }
})

export const {setSessionData} = sessionDataSlice.actions;
export default sessionDataSlice.reducer;