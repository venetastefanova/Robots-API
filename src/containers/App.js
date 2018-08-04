import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'; 
import {setSearchField, requestRobots} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header';

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
      onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots()) // requestRobots gets triggered by the dispatch method; it's gonna catch the fact that it's going to return a function
    }
}


class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots(); // updates the state from Redux
  }
  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value}); //changing the searchfield to the whatever is in the input
  //   // console.log(event.target.value); // gets the value from the search input
   
  // }
  render(){
    // destructuring
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // checks if the robots name includes the search input
    });
    // console.log(filteredRobots);
     return isPending ?
    <h1>Loading...</h1> : 
     (
        <div className="tc">
          <Header/>
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