import React ,{createContext, useReducer} from "react";
// import { reducer, intialState } from "../../utility/reducer";
export const DataContext = createContext()


 export const DataProvider =({children,reducer,intialState})=> {
    return(
        <DataContext.Provider value ={useReducer(reducer, intialState)}>
{children}
        </DataContext.Provider>
    )
}


