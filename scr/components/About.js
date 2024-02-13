import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utlis/UserContext";

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
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">User : {loggedInUser   }</h1>} 
                    </UserContext.Consumer>
                
                <UserClass name ={"First"} location={"Bangalore"} contact ={"vishal@gmail.com"}/>    
            </div>

        )
        
    }
}


export default About;