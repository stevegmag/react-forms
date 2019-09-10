import React, {Component} from 'react';
import Button from '../components/Button'


const buttonStyle = {
    margin : '10px 10px 10px 10px'
}
let logo = "wald-form-images/logo.png";

class HeaderContainer extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {}
    }
    render() {
        return (
            <header>
                <div className="col-md-6">
                    <a href="#"><img src={logo} className="logo" /></a>
                </div>
                <div className="col-md-6">

                    <Button 
                        action = {this.handleClearForm}
                        type = {'primary'}
                        title = {'Returning Student or Alumni'}
                        style={buttonStyle}
                    /> {/* Clear the form */}

                    <Button 
                        action = {this.handleClearForm}
                        type = {'primary'}
                        title = {'Application Login'}
                        style={buttonStyle}
                    /> {/* Clear the form */}
                </div>
            </header>
        );
    }

}    


export default HeaderContainer;