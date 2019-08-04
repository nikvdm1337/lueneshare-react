import React, { Component } from 'react';
import {Button} from 'reactstrap'
import './LandingPage.css'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import landing1 from './img/landing1.png'
import heading2 from './img/heading2.png'

class LandingPage extends Component {
  render() {
    return (
      <div className="bigDiv">
           <div className="text">
      <div className="smallPic">
        <img className="smallImage" src={heading2} alt="Italian Trulli" />
      </div>
      <div className="textInside">
        <h2>LÜNESHARE</h2>
        <p>Teile deine Freude, rette Lebensmittel</p>
      </div>
      <div className="button">
        <Button className="GoToApp" href="/home"> Enter</Button>
        <h6>FOLGE UNS</h6>
      </div>

      <div className="icon">
        <img className="icon1" src={icon1} alt="Italian Trulli" />
        <img className="icon1" src={icon2} alt="Italian Trulli" />
        <img className="icon1" src={icon3} alt="Italian Trulli" />
      </div>
    </div>

      <div className="image">
      <img className="heading" src={landing1} alt="Italian Trulli" />
    </div>
      </div>
    );
  }
}

export default LandingPage;