import appReducer from './appReducer';
import testReducer from './testReducer';
import cardsReducer from './cardsReducer';
import {combineReducers} from 'redux';

// export default function rootReducer(state = {}, action){
// 	return{
// 		appReducer : appReducer(state, action),
// 		testReducer : testReducer(state, action),
// 	}
// }

const rootReducer = combineReducers({
	app: appReducer,
	test: testReducer,
	cards: cardsReducer,
})

export default rootReducer