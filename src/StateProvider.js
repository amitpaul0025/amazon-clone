// we need to use this to track basket

import React, {createContext, useContext, useReducer} from "react";

//data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({ reducer, initialState, children }) => (
		<StateContext.Provider value={useReducer(reducer, initialState)} >
			{children}
		</StateContext.Provider>
	);

//use this to component
export const useStateValue = () => useContext(StateContext);