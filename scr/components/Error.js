import { useRouteError } from "react-router-dom";

const Error = () => {
    const errors = useRouteError()
    return (
        <><h1>Oops...</h1>
        <h2>Something went wrong..</h2>
        <h2>{errors.data}</h2>
        <h3>{errors.status} : {errors.statusText}</h3>
        </>    
    )
}

export default Error;