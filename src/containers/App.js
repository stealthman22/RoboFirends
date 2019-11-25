import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// redux
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        // Updating state for redux thunk functionality
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// dispatch triggers an action
const mapDispatchToProps = (dispatch) => {
    //receives an event and dispatches the action setSearchField
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// Adding state
class App extends Component {
    // constructor not needed again as redux is now handling the state 

    componentDidMount() {
        this.props.onRequestRobots();
    }
    render() {
        // Moved from the onSearchChange method so that the render and return value can access the filterArray.

        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <h1 style={{ height: '90vh' }}> Loading </h1> :

            (
                <div className='tc' >
                    <h1 className='f1' > RoboFriends </h1>
                    <SearchBox searchChange={onSearchChange} />

                    <ErrorBoundary>
                        <Scroll>
                            <CardList className='tc' robots={filterArray} />
                        </Scroll >
                    </ErrorBoundary>
                </div>
            );
    }
}


//Dumb components and smart components

// Connect redux to app component
export default connect(mapStateToProps, mapDispatchToProps)(App);