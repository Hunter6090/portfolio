import React, {useState, useEffect, useRef} from 'react';
import Cards from '../../components/Cards/Cards';
import TextForm from '../../components/TextForm/TextForm';
import {useSelector, useDispatch} from 'react-redux';

const Products = ()=>{
	const selectorCards = state => state.cards
	const cardsState = useSelector(selectorCards);
	const dispatch = useDispatch();
	const [cards, setCards] = useState([]);
	const [errMsg, setErrMsg] = useState('');
	const [errMsgDisplay, setErrMsgDisplay] = useState(false);
	const inputNameRef = useRef('');
	
	useEffect(()=>{
		setCards(cardsState.cards);
	},[cardsState.cards])

	

	const cardExist = (newCardName) =>{
		let flag = false;
		for (let card of cards){
			console.log("cardExist card : ", card);
			console.log("cardExist newCardName : ", newCardName);
			if (card.name === newCardName){
				flag = true
			}
		}
		return flag
	}



	const handleClick = ()=>{
		let newCardName = inputNameRef.current;
		let payloadData = {
			name: inputNameRef.current
		};
		let isCardExist = cardExist(newCardName);
		if(isCardExist){
			setErrMsg("Card Already Exists !!!");
			setErrMsgDisplay(true);
		}else{
			dispatch({type: 'addCard', payload: payloadData });
			inputNameRef.current = '';
			setErrMsg("");
			setErrMsgDisplay(false);			
		}
	}

	const AddNewCardForm = ()=>{
		return (
			<div className = 'newCardForm'>
				<TextForm labelInfo = 'Name' refFnc ={inputNameRef}/>
				<button onClick = {handleClick}>
					Add Cards
				</button>
				{errMsgDisplay && <p>{errMsg}</p>}
			</div>
		)
	}

	const CardList = ()=>{
		return(
			<div className ="cardList">
				{cards.map((item)=>{
					return (
						<div key={`card_${item.name}`}>
							<Cards info = {item}/>
						</div>
					)
				})}
			</div>
		)
	}
	return(
		<div className ="mainContent">
			<h1>Products</h1>
			<CardList/>
			<AddNewCardForm/>
		</div>
	)	
}

export default Products