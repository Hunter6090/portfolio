const initState = {
	value: 0
}

export default function appReducer(state = initState, action){
	switch(action.type){
		case 'appIncreaseValue':
		return {
			...state,
			value : state.value + 1
		}
		default:
			return state
	}
}