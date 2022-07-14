import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import LoggedInSlice from './LoggedInSlice';



const Store = configureStore({
    reducer:{
        LoggedInSlice,

    }

});

export type stateTypeRedux = ReturnType<typeof Store.getState>
export default Store;
