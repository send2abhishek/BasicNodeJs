import React, { Component } from 'react';

function Demo(props){

    return(

        <div>
                <p>Hi From Child {props.name}</p>
                <button onClick={()=>props.click("From Child Component")}>Child Btn</button>
        </div>
    )


}

export default Demo;