import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    const { name} = this.props;
    
    
  }

  componentDidMount(){
    const { name} = this.props;
    
  }

  render() {
    const { name, location, contact } = this.props;
    
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
