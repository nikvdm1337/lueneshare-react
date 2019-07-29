import React from 'react';
import './Footer.css'
 
export default class Footer extends React.Component {
  
  render() {
    return (
        <div className="footer">
        <div className="container">
               <span> 
                <a href='https://github.com/NikolaCirisanovic' rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                <a href='https://twitter.com/nikolacirisano1' rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter fa-3x fa-fw"></i></a>
                <a href='https://www.linkedin.com/in/nikola-cirisanovic-69116a185/' rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin fa-3x fa-fw"></i></a>
              </span>
        </div>
      </div>
  
    );
  }
}