import React from 'react';


const Select = (props) => {
	console.log(props);

  let containerClasses = "form-group";
	if (props.err) { containerClasses += " errContainer"; }
	
	return(
		<div className={containerClasses}>
			<label htmlFor={props.name}> {props.title} </label>
			<select
				key = {props.name}
				id = {props.name}
				name = {props.name}
				value = { props.multiple ? props.value : props.value.toString() }
				multiple = {props.multiple}
				onChange = {props.handlechange}
				focusout = {props.validateForm}
				err = {props.err}
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
			<div className="errorMsg">{props.err}</div>
		</div>
	);
}

export default Select;