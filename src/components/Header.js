import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Header extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return false; // doesn't return the header component and doesn't rerender it 
    }
    render(){
        console.log("buttonCounter");
       return  (
           <div>
               <CounterButton color={'red'}/>
           <h1>RoboFriends</h1>   
           </div>
       );     
    }
}

export default Header;