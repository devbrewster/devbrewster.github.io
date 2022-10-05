import React, {Component} from 'react';
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import {robots} from './components/robots'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render() {
        // Filter robots list by typing in the searchfield
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;
