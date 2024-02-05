import React from "react";

class Para extends React.Component{
    constructor(props){
        super(props)
        console.log("Third Child Cunstructor");
    }

    componentDidMount(){

        console.log("Third Child ComponentDidMount");
    }


    render(){
        console.log("Third Child Render");
        return(
            <p>This is phara</p>
        )
        


    }

}
export default Para;