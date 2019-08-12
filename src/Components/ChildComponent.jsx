import React, { Component } from 'react';
class ChildCmp extends Component {

    constructor(props){
        super(props);

        this.state={

            PageData:props.name
        }

    }
    
    render() { 
        return (  
            <diV>
                <p>Hi Child Component - {this.state.PageData}</p>
                {this.props.children}
            </diV>

            
        );
    }
}
 
export default ChildCmp;