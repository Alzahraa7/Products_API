import {createContext, useReducer, useState} from 'react';
import { reducer } from '../Reducer/Reducer';

//context
export const ProductsContext = createContext();

//provider as component
export const ProductProvider = ({children})=>{ //any childern will pass to provider in App.js 
    //shared data 
    const [state, dispatch] = useReducer(reducer,{
        products:{},
        proDetails:{}
    });
    return(
        <ProductsContext.Provider value={{state, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}