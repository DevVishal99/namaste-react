import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utlis/UserContext";

class About extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
        
    }

    componentDidMount(){

        

    }

    render(){
        
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