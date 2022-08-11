import { configureStore } from "@reduxjs/toolkit";
import bankAccountReducer from '../slicers/bankAccountSlice';

export const store = configureStore({
    reducer: {
        bankAccounts: bankAccountReducer
    }
})