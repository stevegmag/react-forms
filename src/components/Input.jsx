import React from 'react';


const Input = (props) => {
  console.log(props.inputtype);
  let classWidth = "form-group";
  if (
    (props.className) && 
    (props.className.indexOf("half-width") > -1)
  ) { classWidth += " half-width"; }
	return (  
  <div className={classWidth}>
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      key = {props.name}
      className = "form-control"
      id = {props.name}
      name = {props.name}
      type = {props.inputtype}
      value = {props.value}
      onChange = {props.handlechange}
      placeholder = {props.placeholder} 
    />
  </div>
)
}

export default Input;