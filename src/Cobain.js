import React, { Component } from 'react';
import './Cobain.css';
import './Main.css';

export default class Cobain extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

		this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleClick(event) {
	event.preventDefault();

	this.setState({
		backgroundColor: 'red'
	});

	}
    handleKeyDown(event)  {
        console.log('in event')
    if(event.which === 65){
        this.setState({
            backgroundColor: 'red'
        });    
    } else if(event.which === 83){
        this.setState({
            backgroundColor: 'blue'
        });    
    } else if(event.which === 68){
        this.setState({
            backgroundColor: 'green'
        });    
    }else if(event.which === 70){
        this.setState({
            backgroundColor: 'yellow'
        });    
    }
    }

  render() {
    return (
    	<div tabIndex="1" onKeyDown={this.handleKeyDown} className="game">
                
                <div style={{backgroundColor: this.state.backgroundColor}} className="box box1">
        		</div>
        		

        		<div style={{backgroundColor: this.state.backgroundColor}} className="box box2">
        		</div>
        		
        		<div style={{backgroundColor: this.state.backgroundColor}} className="box box3">
        		</div>
        		
        		<div style={{backgroundColor: this.state.backgroundColor}} className="box box4">
        		</div>
    	</div>
    	);
  	}
}

