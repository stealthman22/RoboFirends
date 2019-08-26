import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';




/* const App = () => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList className='tc' robots={robots} />
        </div>
    );

} */

// or
// Adding state
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // Event function for searchbox
    onSearchChange = (e) => {
        // must for state to be updated.
        this.setState({ searchfield: e.target.value })
    }

    render() {
        // Moved from the onSearchChange method so that the render and return value can access the filterArray.
        const filterArray = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        console.log(filterArray);
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList className='tc'
                    // {changed from this.state.robots after moving filterArray.}
                    robots={filterArray} />
            </div>
        );

    }
}



export default App;