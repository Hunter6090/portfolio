import React from 'react';
// import style from './style.css';

class Cards extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		// console.log("Here is Cards Component !!!");
		// console.log("this.props : ", this.props);	
		return(
			<div className = "cardMainLayout">
				<h2> {this.props.info.name} </h2>
				{/*<a>Name : {this.props.info.name}</a>*/}
				{/*<a>Age : {this.props.info.age}</a>*/}
			</div>
		)		
	}
}

export default Cards