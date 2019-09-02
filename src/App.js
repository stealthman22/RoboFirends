import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';




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
            robots: [],
            searchfield: ''
        }
        console.log('Constructor');
    }

    componentDidMount() {
        // Goes to that location fetches the file, receives something, and converts it to json)
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => (this.setState({ robots: users })))
        /* {
       this.setState({ robots: users });
   }); */

        //or 
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));


    }

    // Event function for searchbox
    onSearchChange = (e) => {
        // must for state to be updated.
        this.setState({ searchfield: e.target.value })
    }

    render() {
        // Moved from the onSearchChange method so that the render and return value can access the filterArray.
        const filterArray = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        console.log('Render');
        if (this.state.robots === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        <CardList className='tc'
                            // {changed from this.state.robots after moving filterArray.}
                            robots={filterArray} />
                    </Scroll>
                </div>
            );
        }


    }
}


// Dumb components and smart components

export default App;

