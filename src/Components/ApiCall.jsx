import React, { Component } from 'react';
import ChildCmp from './ChildComponent'
import axios from 'axios';
class Apilist extends Component {

    constructor(props){
        super(props);

        this.state={
            Data:[],
            loading:false

        }
    }

    componentWillMount(){
        this.getUserList();
        
    }

    getUserList(){

        this.setState({
            loading:true
        })

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{

            console.log(response);

            this.setState({

               Data:response.data,
               loading:false
            })

           

            
        })
        .catch(err =>{

            console.log(err);
        })

        

    }
   
    render() { 
        return (  
            <div>

                    {
                        <div>
                        {!this.state.loading? this.state.Data.slice(0,5).map(responsedata =>
                          <div><p>{responsedata.title}</p><p>{responsedata.id}</p></div> ): <h1>Loading data:</h1> }
                           </div>
                 
                    }

                    <ChildCmp name="Abhishek Aryan">

                        <button>Action </button>
                        <p>This is demo para</p>

                    </ChildCmp>

            </div>
            
        );
    }
}
 
export default Apilist;
