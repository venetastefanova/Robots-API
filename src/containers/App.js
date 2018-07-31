import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'; 
import {setSearchField} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    //this comes from the reducer, since they are more than one reducer, we use object 
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots, // gets it from the reducer
      isPending: state.requestRobots.isPending,
      error:state.requestRobots.error
  }
}
//what triggers the action
const mapDispatchToProps = (dispatch) =>{
    return {
      onSearchChange : (event) => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
   state = {
    robots:[]
  }

  componentDidMount(){
    // console.log(this.props.store.getStore);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(users=>this.setState({robots:users}));
  }
  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value}); //changing the searchfield to the whatever is in the input
  //   // console.log(event.target.value); // gets the value from the search input
   
  // }
  render(){
    // destructuring
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // checks if the robots name includes the search input
    });
    // console.log(filteredRobots);
     return !robots.length ?
    <h1>Loading...</h1> : 
     (
        <div className="tc">
           <h1>RoboFriends</h1>
           <SearchBox searchChange = {onSearchChange}/>
           <Scroll>
             <ErrorBoundary>
                <CardList robots={filteredRobots}/>
             </ErrorBoundary>
           </Scroll>
         </div>
     
    ) 
  }
}

//connect =higher order function = returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);