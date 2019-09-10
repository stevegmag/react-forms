import React, {Component} from 'react'; 

class FooterContainer extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {}
    }
    render() {
        return (
            <footer className="footer">
                <div className="sticky-footer">
                    <div className="container">
                        <h3 className="contact">Contact Test</h3>
                        <ul>
                            <li>
                                <a href="tel:8556494970" className="InfinityNumber" lu-infinity-call="">8556494970</a>
                            </li>
                            <li>
                                <a href="mailto:contact@Testu.edu" className="">contact@Testu.edu</a>
                            </li>
                        </ul>
                        <p className="copyright">© 2018 Test University. All Rights Reserved.</p>
                        <p>To access the electronic version of the Annual Security Report, <a href="https://www.Testu.edu/-/media/Test/files/legal/2018-clery-act-security-report-v-2.pdf?la=en" target="_blank">click here</a>. Paper copies available upon request.</p>
                    </div>
                </div>
            </footer>
        );
    }
}


export default FooterContainer;