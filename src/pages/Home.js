import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const Home = ()=>{
	const selectorApp = state => state.app
	const appState = useSelector(selectorApp);
	const dispatch = useDispatch();
	console.log("Here is Home Component!!!");
	console.log("appState : ", appState);

	const fncOnClick = ()=>{
		console.log("Here is Increse Value");
		dispatch({type: 'appIncreaseValue'});
	}	
	return(
		<div className ="mainContent">
			<h1>Home</h1>
			<p>App State Value : {appState.value}</p>
			<button onClick ={fncOnClick} >Increse Value</button>
		</div>
	)	
}

export default Home