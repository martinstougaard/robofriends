import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots : robots,
			seachfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	} 

	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots =>{
					return robots.name.toLowerCase().includes(searchfield.toLowerCase());
				})
		return(
			<div className='tc'>
				<h1>Robofriends</h1>	
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
		    </div>
			);	
		}
	
}

export default App;