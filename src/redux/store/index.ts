import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from '../slice/config/loaderSlice';
import userSlice from '../slice/user/userSlice';
import paymentCardSlice from '../slice/paymentCard/paymentCardSlice';

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    user: userSlice,
    Cards: paymentCardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
