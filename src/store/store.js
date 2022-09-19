import { configureStore } from "@reduxjs/toolkit";
import bankAccountReducer from '../slicers/bankAccountSlice';
import sessionDataReducer from '../slicers/sessionDataSlice';
import badgeReducer from '../slicers/badgeSlice';

export const store = configureStore({
    reducer: {
        bankAccounts: bankAccountReducer,
        sessionData: sessionDataReducer,
        badges: badgeReducer
    }
})