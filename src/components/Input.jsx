import React from 'react';


const Input = (props) => {
  console.log(props.inputtype);
  let containerClasses = "form-group";
  if (
    (props.className) && 
    (props.className.indexOf("half-width") > -1)
  ) { containerClasses += " half-width"; }
  if (props.err) { containerClasses += " errContainer"; }
	return (  
  <div className={containerClasses}>
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      key = {props.name}
      className = "form-control"
      id = {props.name}
      name = {props.name}
      type = {props.inputtype}
      value = {props.value}
      onChange = {props.handlechange}
      onBlur = {props.onBlur}
      err = {props.err}
      placeholder = {props.placeholder} 
    />
    <div className="errorMsg">{props.err}</div>
  </div>
)
}

export default Input;