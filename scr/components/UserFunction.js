import { useState } from "react";

const UserFunction = (props) => {

    const [count, setCount] = useState(0);
    const [count1] = useState(1)

    const {name,location,contact} = props;

    return (
        <div className="user-card">
            <h1>Count :{count}</h1>
            <button onClick={() =>{
                const count1 = count+1;
                setCount(count1);

            }}>Update Count</button>
            <h1>Name:{name}</h1>
            <h2>{location}</h2>
            <h2>{contact}</h2>
        </div>
    )
}

export default UserFunction;