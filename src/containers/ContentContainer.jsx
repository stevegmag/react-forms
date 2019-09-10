import React, {Component} from 'react'; 

class ContentContainer extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {}
    }
    render() {
        return (
            <section>
                <p>Text goes here</p>
                <ul>
                    <li className="icon-journey">Text goes here</li>
                    <li className="icon-community">Text goes here</li>
                    <li className="icon-check">Text goes here</li>
                </ul>
            </section>
        );
    }
}


export default ContentContainer;