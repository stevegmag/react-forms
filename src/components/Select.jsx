import React from 'react';


const Select = (props) => {
	console.log(props)
	return(
		<div className="form-group">
			<label htmlFor={props.name}> {props.title} </label>
		    <select
					key = {props.name}
		      id = {props.name}
		      name = {props.name}
					value = { props.multiple ? props.value : props.value.toString() }
					multiple = {props.multiple}
		      onChange = {props.handlechange}
		      className = "form-control"
				>
		      <option value="" disabled>{props.placeholder}</option>
		      {
							props.options.map(option => {
							return (
								<option
									key = {props.name + '_' + option}
									value = {option}
									label = {option}>{option}</option>
							);
						})
					}
		    </select>
		</div>
	);
}

export default Select;