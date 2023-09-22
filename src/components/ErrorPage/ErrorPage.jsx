import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            {/* <button className="btn"><Link to='/'>Go Back To Home</Link></button> */}
            <Link className="btn" to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;