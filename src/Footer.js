import React from 'react';
import './Footer.css'
 
export default class Footer extends React.Component {
  
  render() {
    return (
        <div className="footer">
        <div className="container">
               <span> 
                <a href='www.google.de'><i className="fa fa-github"></i></a>
                <a href='www.google.de'><i className="fa fa-twitter fa-3x fa-fw"></i></a>
                <a href='www.google.de'><i className="fa fa-youtube-play fa-3x fa-fw"></i></a>
                <a href='www.google.de'><i className="fa fa-linkedin fa-3x fa-fw"></i></a>
              </span>
        </div>
      </div>
  
    );
  }
}