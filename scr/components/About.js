import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
        console.log("Parent Cunstructor")
    }

    componentDidMount(){

        console.log("Parent componentDidMount")

    }

    render(){
        console.log("Parent Render");
        return (
            <div className="about">
                <h1>
                    About Us..
                </h1>
                <h2>
                    Our Team
                </h2>
                <UserClass name ={"First"} location={"Bangalore"} contact ={"vishal@gmail.com"}/>
            
                
                
            </div>

        )
        
    }
}


export default About;