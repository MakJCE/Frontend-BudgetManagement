import { configureStore } from '@reduxjs/toolkit';
import movementReducer from '../slicers/movementSlice';
import bankAccountReducer from '../slicers/bankAccountSlice';
import sessionDataReducer from '../slicers/sessionDataSlice';
import badgeReducer from '../slicers/badgeSlice';
import categoryReducer from '../slicers/categorySlice';

export const store = configureStore({
  reducer: {
    bankAccounts: bankAccountReducer,
    movements: movementReducer,
    sessionData: sessionDataReducer,
    badges: badgeReducer,
    categories: categoryReducer
  }
});
