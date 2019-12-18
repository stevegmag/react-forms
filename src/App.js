import React, { Component } from 'react';
import './App.min.css';
import FormContainer from './containers/FormContainer';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import ContentContainer from './containers/ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        
        <HeaderContainer />

        <div className="main-container container">
          <div className="col-md-6">
            <h1> Content Container </h1>    
            <ContentContainer />      
          </div>

          <div className="col-md-6">
            <h3> Form Container </h3>
            <FormContainer />
          </div>
        </div>
        
        <FooterContainer />

      </div>
    );
  }
}

export default App;
