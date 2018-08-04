import React, {Component} from 'react';


class CounterButton extends Component{
    state= {
        count: 0
        }

    shouldComponentUpdate(nextProps, nextState){
        //console.log(nextState, nextProps);
        //only if the state updates
        if(this.state.count !== nextState.count){
            return true;
        }
        return false;
    }

    updateCount = () =>{//gets the last state
        this.setState(state=>{
           return{
                count:this.state.count +1
            }
        });
    }
    render(){
        console.log("header");
       return (
           <button 
                color={this.props.color} 
                onClick={this.updateCount}>
                Count: {this.state.count}</button>
       );        
    }
}

export default CounterButton;