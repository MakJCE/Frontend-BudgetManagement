import { configureStore } from "@reduxjs/toolkit";
import bankAccountReducer from '../slicers/bankAccountSlice';
import sessionDataReducer from '../slicers/sessionDataSlice';

export const store = configureStore({
    reducer: {
        bankAccounts: bankAccountReducer,
        sessionData: sessionDataReducer,
    }
})