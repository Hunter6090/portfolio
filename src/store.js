import { createStore } from 'redux'
import rootReducer from './redux/reducer/reducer';


const store = createStore(rootReducer);

// console.log("store : ", store);
// console.log("store.getState() : ", store.getState());


export default store