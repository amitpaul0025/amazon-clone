
export const initialState = {
	basket: []
}

function reducer(state, action){
	console.log(action);
	switch (action.type){
		case "ADD_TO_BASKET":
			//to-do
			return { 
					...state,
					basket: [...state.basket, action.item],
				};

		case "REMOVE_FROM_BASKET":
			//copy the basket
			let newBasket = [...state.basket];

			//check if item exist in basket already
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if(index >= 0){
				//remove that index item which exist
				newBasket.splice(index, 1);
			}

			return { 
				...state, 
				basket: newBasket 
			};
		default:
			return state;		
	}
}

export default reducer;