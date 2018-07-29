import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
    // destructuring
    const {robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // checks if the robots name includes the search input
    });
    // console.log(filteredRobots);
     return !robots.length ?
    <h1>Loading...</h1> : 
     (
        <div className="tc">
           <h1>RoboFriends</h1>
           <SearchBox searchChange = {this.onSearchChange}/>
           <Scroll>
             <CardList robots={filteredRobots}/>
           </Scroll>
         </div>
     
    )
    
    
  }
}

export default App;