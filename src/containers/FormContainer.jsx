import React, {Component} from 'react';  

/* Import Components */
import CheckBox       from '../components/CheckBox';  
import Input          from '../components/Input';  
import TextArea       from '../components/TextArea';  
import Select         from '../components/Select'; 
import Countries      from '../components/Countries';
import Button         from '../components/Button';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        aoi: [],
        degree: [],
        poi: [],
        agreement:'',
        passwd: ''

      },

      aoiOptions: [
        'Business and Management',
        'Communication',
        'Criminal Justice and Emergency',
        'Education',
        'Information Technology',
        'Nursing',
        'Psychology and Counseling',
        'Public Health and Health Sciences',
        'Public Policy and Administration',
        'Social Work and Human Services',
        'Undergraduate Studies'
      ],
      degreeOptions: [
        'Masters',
        'Bachelors',
        'Certificate',
        'Doctorate'
      ],

    } //state

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  } //construtor

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFirstName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
      {...prevState.newUser, firstName: value }
    }), () => console.log(this.state.newUser))
  } //handleFirstName

  handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, lastName: value }
    }), () => console.log(this.state.newUser))
   } //handleLastName

  handleEmail(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, email: value }
    }), () => console.log(this.state.newUser))
  } //handleEmail

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
  } //handleInput

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {...prevState.newUser, about: value }
    }), ()=>console.log(this.state.newUser))
  } //handleTextArea

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState( 
      prevState => ({ newUser:
        {...prevState.newUser, skills: newSelectionArray }
      })
    )
  } //handleCheckBox

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data =>{
        console.log("Successful" + data);
      })
    })
  } //handleFormSubmit  

  handleClearForm(e) {
    e.preventDefault();
    this.setState({ 
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        agreement: ''
      },
    })
  } //handleClearForm

  render() {
    return (
    
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
      
        <Input 
          inputType={'text'}
          title= {'First Name'} 
          name= {'first_name'}
          value={this.state.newUser.firstName} 
          placeholder = {'Enter your first name'}
          handleChange = {this.handleInput}
          className= {'form-control half-width'}            
        /> {/* Name of the user */}

        <Input 
          inputType={'text'}
          title= {'Last Name'} 
          name= {'last_name'}
          value={this.state.newUser.lastName} 
          placeholder = {'Enter your first name'}
          handleChange = {this.handleInput}
          className= {'form-control half-width'}            
        /> {/* Name of the user */}
      
        <Input 
          inputType={'email'} 
          name={'email'}
          title= {'Email Address'} 
          value={this.state.newUser.email} 
          title= {'Email Address'} 
          placeholder = {'Enter your email address'}
          handleChange={this.handleEmail} 
        /> {/* email */} 

        <Countries 
          title={'Countries'}
          name={'country'}
          value = {this.state.newUser.country}
          placeholder = {'Select Country'}
          handleCilhange = {this.handleInput}
        /> {/* Age Selection */}

        <Select 
          title={'Area of Interest'}
          name={'aoi'}
          options = {this.state.aoiOptions} 
          value = {this.state.newUser.aoi}
          placeholder = {'Select Area of Interest'}
          handleCilhange = {this.handleInput}
        /> {/* Age Selection */}

        <Select 
          title={'Degree Level'}
          name={'degree'}
          options = {this.state.degreeOptions} 
          value = {this.state.newUser.degree}
          placeholder = {'Select Degree Level'}
          handleCilhange = {this.handleInput}
        /> {/* Age Selection */}

        <Button 
            action = {this.handleFormSubmit}
            type = {'success'} 
            title = {'Submit'} 
          style={buttonStyle}
        /> { /* Submit */ }
        
        <Button 
          action = {this.handleClearForm}
          type = {'warning'}
          title = {'Clear'}
          style={buttonStyle}
        /> {/* Clear the form */}
        
      </form>
  
    ); //return
  } //render
} //class

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;