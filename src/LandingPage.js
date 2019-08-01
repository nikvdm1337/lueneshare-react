import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './LandingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
      <div className="headline"> <h1>Lüneshare - Teile deine Freude, rette Lebensmittel!</h1></div>
      <div className="introduction"> 
      <h3>About Lueneshare</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra urna maximus, lacinia mi ut, tincidunt metus. Proin luctus, tellus nec lacinia iaculis, risus felis accumsan tellus, non volutpat est dui nec magna. Cras porttitor porta enim eget laoreet. Nulla pretium, felis congue luctus faucibus, neque dolor faucibus lorem, quis luctus eros ligula eget justo. Donec commodo est id vestibulum placerat. Cras iaculis, arcu at venenatis fringilla, mauris orci finibus tellus, vitae bibendum massa quam sit amet libero. Nullam non eros lacus. Donec aliquam dolor sodales, tempus ex ac, bibendum ligula. Fusce non turpis sit amet nisl sollicitudin blandit tempus in nunc. Fusce semper sem in luctus hendrerit. Vivamus id risus vulputate, placerat massa vitae, porta ipsum. Aliquam ac blandit nunc. Nullam nec nisi laoreet, ullamcorper nunc vitae, hendrerit lacus. Mauris porta vel quam eget varius. Vivamus mollis arcu sapien, ac aliquam diam venenatis vitae.</p>
      </div>
      <div className="goToHome"><Button href="/home" color="success" className="HomeButton">Klicke hier!</Button></div>
    </div>
    );
  }
}

export default LandingPage;