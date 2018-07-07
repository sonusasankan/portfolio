import React, { Component } from 'react';  
import $ from "jquery";
import HamburgerMenu from "react-hamburger-menu";
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Logo from './logo/Logo'; 
import './Header.scss'; 


class NavToggleButton extends Component{
  constructor(props) {
    super(props);
    this.state =  {open: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      		open: !this.state.open
      	}));
   $('#navigation').fadeToggle()
  } 

 render(){
   return(
    <div className="nav-toggle-btn"> 
          <HamburgerMenu
	isOpen={this.state.open}
	menuClicked={this.handleClick.bind(this)}
	width={22}
	height={18}
	strokeWidth={1}
	rotate={0}
	color='black'
	borderRadius={0}
  animationDuration={0.5}
/>
    </div>
   )
 }
}
class Header extends Component { render() {
  return (
<div className="pf-header">
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Logo name="Sonu Sasankan"/>
    <ul id="navigation" className="navbar-nav pf-custom-nav ml-auto">
      <li className="nav-item active">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item active">
      <Link to="/Works">works</Link>  
      </li>
      <li className="nav-item active">
      <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    <NavToggleButton/>
  </nav>
  </div>
</div>
);
 } 
}
export default Header;