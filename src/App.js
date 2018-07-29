import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
   state = {
    robots:[],
    searchField:''
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(users=>this.setState({robots:users}));
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value}); //changing the searchfield to the whatever is in the input
    // console.log(event.target.value); // gets the value from the search input
   
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); // checks if the robots name includes the search input
    });
    // console.log(filteredRobots);
    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    }
    else{
      return (
        <div className="tc">
           <h1>RoboFriends</h1>
           <SearchBox searchChange = {this.onSearchChange}/>
           <CardList robots={filteredRobots}/>
         </div>
     
       );
    }
    
  }
}

export default App;