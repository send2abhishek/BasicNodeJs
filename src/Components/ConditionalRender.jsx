import React, { Component } from 'react';
import DashBoardData from './LandinPageData';
import Demo from './listrendering'

class Condtional extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:true,
            skills:['Android','Java','Xamarin','React']
         }
    }

    skill = () => {this.state.skills.map(data =><div>{data}</div>)} 

    render() { 
        
        return(
            <div>
                {/* this.state.isLoading? <div>Hi from Abhishek</div> :

                <div>Hi from conditional</div> */}

            {/* {DashBoardData.map(data =><div>

                    <Demo key={data.id} id={data.id} name={data.MenuName} />
            
            </div>)} */}


            {this.state.skills.map((data,index) => <h1 key={index}>{data},{index}</h1>)}

            

            </div>

           
        );
        
    }
}
 
export default Condtional;