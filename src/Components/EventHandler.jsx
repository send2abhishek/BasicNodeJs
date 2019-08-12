import React, { Component } from 'react';
import Demo from './ChildCmpHandler.js'
class EventHandler extends Component {
   constructor(props){

        super(props);
        this.state={

            name:'Abhishek Aryan'
        }
   }

   clickHandler= ()=>{
      this.setState({

        name:'Good Bye'
      })
   }
    render() { 
        return ( 

            <div>
                <p>Hi {this.state.name}</p>
                <button onClick={this.clickHandler}>Click Me</button>
                <Demo name="Abhishek" click={this.clickHandler} />
            </div>
         );
    }
}
 
export default EventHandler;