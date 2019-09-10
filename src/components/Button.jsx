import React from 'react';


const Button = (props) => {
	//console.log(props.style);
	let btnType = "btn"
	if( props.type ) {
		btnType += " btn-"+props.type;
	}
	return(
	<button 
		style= {props.style} 
		className = {btnType}
		onClick= {props.action} 
	> 
		{props.title} 
	</button>)
}


export default Button;