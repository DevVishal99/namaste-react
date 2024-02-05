import React from "react";
import Para from "./Para";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    const { name} = this.props;
    
    console.log(name+"Child Cunstructor");
  }

  componentDidMount(){
    const { name} = this.props;
    console.log(name+"Child ComponentDidMount")
  }

  render() {
    const { name, location, contact } = this.props;
    console.log(name+"Child Render");
    return (
      <div className="user-card">
    
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{contact}</h2>
      </div>
    );
  }
}

export default UserClass;
