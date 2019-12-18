import React, {Component} from 'react';  

/* Import Components */
//import CheckBox       from '../components/CheckBox';  
import Input          from '../components/Input';  
//import TextArea       from '../components/TextArea';  
import Select         from '../components/Select'; 
import Countries      from '../components/Countries';
import Button         from '../components/Button';

const aoiOptions = [
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
];
const degreeOptions = [
  'Masters',
  'Bachelors',
  'Certificate',
  'Doctorate'
];

const poiOptions = [
  { 
    aoi: 'Business and Management', 
    degree: [
      {
        'Masters': ['MS in Business and Management', 'MS in Marketing']
      }
    ]
  },
  {
    aoi: 'Communication',
    degree:[
      {
        name: 'Masters', 
        options: ['MS in Communications', 'MS in Marketing'],
      },
      {
        name: 'Bachelors',
        options: ['BS in Communications', 'BS in Marketing'],
      },
      {
        name: 'Certificate',
        options: ['Graduate Certificate in Communications', 'Graduate Certificate in Digital Marketing']
      },
      {
        name: 'Doctorate',
        options: []
      }
    ]
  },
  {
    aoi: 'Criminal Justice and Emergency',
    degree: [
      {
        name: 'Masters', 
        options: []
      },
      {
        name: 'Bachelors',
        options: []
      },
      {
        name: 'Certificate',
        options: []
      },
      {
        name: 'Doctorate',
        options: []
      }
    ]
  }
];

class FormContainer extends Component {  
  constructor(props) {
    super(props);


    this.state = {
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        aoi: [],
        degree: [],
        poi: [],
        agreement:'',
        passwd: ''
      },  
      aoiOptions, 
      degreeOptions,
      poiOptions: [],

    } //state

    this.handleInput            = this.handleInput.bind(this);
    this.handleCheckBox         = this.handleCheckBox.bind(this);
    this.handleTextArea         = this.handleTextArea.bind(this);
    this.handleEmail            = this.handleEmail.bind(this);
    this.handlePhoneNumber      = this.handlePhoneNumber.bind(this);
    this.handleFirstName        = this.handleFirstName.bind(this);
    this.handleLastName         = this.handleLastName.bind(this);
    this.handleInputAOI         = this.handleInputAOI.bind(this);
    this.handleDegree           = this.handleDegree.bind(this);
    this.handleInputPOI         = this.handleInputPOI.bind(this);
    this.handleInputPOIOptions  = this.handleInputPOIOptions.bind(this);
    this.handleFormSubmit       = this.handleFormSubmit.bind(this);
    this.handleClearForm        = this.handleClearForm.bind(this);
  } //construtor

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) { // generic field handle
    console.log("Inside handleInput");
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
  } //handleInput
  
  handleFirstName(e) {
    console.log("Inside handleFirstName");
   let value = e.target.value;
   let name = e.target.name;
   this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
  } //handleFirstName

  handleLastName(e) {
    console.log("Inside handleLastName");
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
   } //handleLastName

  handleEmail(e) {
    console.log("Inside handleEmail");
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
  } //handleEmail

  handlePhoneNumber(e) {
    console.log("Inside handlePhoneNumber");
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newUser : 
      {...prevState.newUser, [name]: value }
    }), () => console.log(this.state.newUser))
  } //handlePhoneNumber

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {...prevState.newUser, [name]: value }
    }), ()=>console.log(this.state.newUser))
  } //handleTextArea

  handleCheckBox(e) {
    console.log("Inside handleCheckBox");
    const newSelection = e.target.value;
    let name = e.target.name;
    let newSelectionArray;

    if(this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState( 
      prevState => ({ newUser:
        {...prevState.newUser, [name]: newSelectionArray }
      })
    )
  } //handleCheckBox

  handleInputAOI(e) {
    console.log("Inside handleInputAOI");
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
        newUser: {...prevState.newUser, [name]: value }
      }), 
      ()=>{
        console.log(this.state.newUser); 
        this.handleInputPOIOptions()
      }  
    )
  } //handleInputAOI
  
  handleDegree(e) {
    console.log("Inside handleDegree");
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
        newUser: {...prevState.newUser, [name]: value }
      }), 
      ()=>{
        console.log(this.state.newUser); 
        this.handleInputPOIOptions()
      }
    )
  } //handleInputAOI

  handleInputPOIOptions(e) {
    console.log("Inside handleInputPOIOptions");
    console.log(" -- AOI: ", this.state.newUser.aoi);
    console.log(" -- Degree: ", this.state.newUser.degree);

    let aoi = this.state.newUser.aoi;
    let degree = this.state.newUser.degree;

    // aoi and degree set
    if ( (aoi.length > 0) && (degree.length > 0) ) {
      console.log("aoi and degree set");
      let options = [];
      let filteredAOI = poiOptions.filter(e => e.aoi === aoi);
      console.log('filteredAOI:  ', filteredAOI); 

      // let filteredDegree = filteredAOI.map(e.filter( e => e.degree == degree));
      // console.log('filteredDegree:  ', filteredDegree); 

      filteredAOI.map(e => {
        console.log('e:  ', e); 
        //options = [...options, ...e.degree.filter(e => e.degree == degree))];
        let degrees = [];
        degrees = [...degrees, ...e.degree[0][degree]];
        console.log('degrees:  ', degrees); 
  
        options = [...options, ...degrees];
        console.log('options:  ', options); 

        return false;
      });

      //poiOptions.filter(option => option.aoi == aoi && option.degree == degree );
      // lookup options by these values
      this.setState(prevState => ({
        ...prevState, poiOptions: options
      }), 
      () => {
        console.log(this.state); 
      }
    )

    }
    else {
      console.log("aoi and degree not set");
      return; 
    }
  } //handleInputPOIOptions

  handleInputPOI(e) {
    console.log("Inside handleInputPOI");
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {...prevState.newUser, [name]: value }
    }), ()=>console.log(this.state.newUser))
  } //handleInputAOI

  handleFormSubmit(e) {
    console.log("Inside handleFormSubmit");
    e.preventDefault();
    let userData = this.state.newUser;
    console.log("presubmit userData", userData);

    fetch('http://localhost:3000',{
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
    console.log("Inside handleClearForm");
    e.preventDefault();
    this.setState({ 
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        aoi: [],
        degree: [],
        poi: [],
        agreement:'',
        passwd: ''
      },
    })
  } //handleClearForm

  render() {
    return (
    
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
      
        <Input 
          inputtype = {'text'}
          title = {'First Name'} 
          name = {'first_name'}
          value = {this.state.newUser.firstName} 
          placeholder = {'Enter your first name'}
          handlechange = {this.handleFirstName}
          className = {'form-control half-width'}            
        /> {/* First Name of the user */}

        <Input 
          inputtype ={'text'}
          title = {'Last Name'} 
          name = {'last_name'}
          value = {this.state.newUser.lastName} 
          placeholder = {'Enter your first name'}
          handlechange = {this.handleLastName}
          className = {'form-control half-width'}            
        /> {/* Last Name of the user */}
      
        <Input 
          inputtype = {'email'} 
          name = {'email'}
          title = {'Email Address'} 
          value ={this.state.newUser.email} 
          placeholder = {'Enter your email address'}
          handlechange = {this.handleEmail} 
        /> {/* email */} 
      
        <Input 
          inputtype = {'text'} 
          name = {'phone_number'}
          title = {'Phone Number'} 
          value = {this.state.newUser.phoneNumber} 
          placeholder = {'Enter your phone number'}
          handlechange = {this.handlePhoneNumber} 
        /> {/* Phone Number */} 

        <Countries 
          title = {'Countries'}
          name = {'country'}
          value = {this.state.newUser.country}
					multiple = {false}
          placeholder = {'Select Country'}
          handlechange = {this.handleInput}
        /> {/* country Selection */}
<hr />

        <Select 
          title = {'Area of Interest'}
          name = {'aoi'}
          options = {this.state.aoiOptions} 
          value = {this.state.newUser.aoi}
					multiple = {false}
          placeholder = {'Select Area of Interest'}
          handlechange = {this.handleInputAOI}
        /> {/* Area of Interest Selection */}

        <Select 
          title = {'Degree Level'}
          name = {'degree'}
          options = {this.state.degreeOptions} 
          value = {this.state.newUser.degree}
					multiple = {false}
          placeholder = {'Select Degree Level'}
          handlechange = {this.handleDegree}
        /> {/* Degree Level Selection */}

        <Select 
          title = {'Program of Interest'}
          name = {'poi'}
          options = {this.state.poiOptions} 
          value = {this.state.newUser.poi}
					multiple = {false}
          placeholder = {'Select Projram of Interest'}
          handlechange = {this.handleInputPOI}
        />  {/* Program of Interest Selection */}

<hr />

        <Button 
            action = {this.handleFormSubmit}
            type = {'success'} 
            title = {'Submit'} 
            style = {buttonStyle}
        /> { /* Submit */ }
        
        <Button 
          action = {this.handleClearForm}
          type = {'warning'}
          title = {'Clear'}
          style = {buttonStyle}
        /> {/* Clear the form */}
        
      </form>
  
    ); //return
  } //render
} //class

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default FormContainer;