import React, {Component} from 'react';
import CounterButton from './CounterButton';
import CounterButton2 from './CounterButton2';

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
           <CounterButton/>
           <CounterButton2/>
           </div>
       );     
    }
}

export default Header;