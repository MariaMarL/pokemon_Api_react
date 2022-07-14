import { createSlice } from '@reduxjs/toolkit';
import * as React from 'react';

const initialState={
    user:false
}
const LoggedInSlice= createSlice(
    {
        name: 'logged',
        initialState,
        reducers:{
            logInInReducer(){
                return {user:true}
            },
            logOutInReducer(){
                return {user:false}
            }
        }

    }
)

export default LoggedInSlice.reducer
export const {logInInReducer, logOutInReducer} = LoggedInSlice.actions
