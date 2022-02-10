const initState = {
	cards: [],
}

export default function cardsReducer(state = initState, action){
	switch(action.type){
		case 'addCard':
			let newCards = [...state.cards];
			newCards.push(action.payload);
			return {
				...state,
				cards : newCards
			}
		default:
			return state
	}
}