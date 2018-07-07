import React, { Component } from 'react';  

class Logo extends Component {
    constructor(props){
      super()
    }
    render(){
        return(
            <a className="navbar-brand" href="/">{this.props.name}</a>
        )
    }
}

export default Logo;