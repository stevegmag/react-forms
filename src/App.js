import React, { Component } from 'react';
import logo from './logo.svg';
import './App.min.css';
import FormContainer from './containers/FormContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import ContentContainer from './containers/ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        
        <HeaderContainer />

        <div className="col-md-6">
          <h1> Content Container </h1>    
          <ContentContainer />      
        </div>

        <div className="col-md-6">
          <h3> Form Container </h3>
          <FormContainer />
        </div>
        
        <FooterContainer />

      </div>
    );
  }
}

export default App;
