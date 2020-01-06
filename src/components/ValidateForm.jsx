import React from 'react';


const ValidateForm = (props) => {
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

export default ValidateForm;

/*
validateForm(e) {
    console.log("Inside validateForm");
    e.preventDefault();

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your First Name.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }
  } //validateForm
  */