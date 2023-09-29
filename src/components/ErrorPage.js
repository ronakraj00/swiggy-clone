import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>OH! NO</h1>
            <h3>Something Went Wrong</h3>
            <h5>{error.status + "  " + error.statusText || error.message}</h5>
            <button>
                <Link to={"/"}>Go Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;
