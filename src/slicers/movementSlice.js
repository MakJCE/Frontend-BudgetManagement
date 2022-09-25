import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movements: []
}

export const movementSlice = createSlice({
    name:'movements',
    initialState,
    reducers:{
        setMovements: (state, action)=>{
            state.movements = action.payload;
        },
        addMovement: (state, action)=>{
            state.movements.push(action.payload);
        }
    }
})

export const {setMovements, addMovement} = movementSlice.actions;
export default movementSlice.reducer;