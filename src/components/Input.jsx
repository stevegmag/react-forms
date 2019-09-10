import React from 'react';


const Input = (props) => {
  console.log(props.className);
  let classWidth = "form-group";
  if (
    (props.className) && 
    (props.className.indexOf("half-width") > -1)
  ) { classWidth += " half-width"; }
	return (  
  <div className={classWidth}>
    <label for={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
}

export default Input;