import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
        <b>Sorry! Page not found!</b>
        <Link to="/">Back to home page</Link>
        </>
    );
}

export default NotFoundPage
