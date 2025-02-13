import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { user } = useAuth();
    const justSignedUp = localStorage.getItem('justSignedUp') === 'true';

    if (justSignedUp) {
        // Remove the flag after redirecting
        localStorage.removeItem('justSignedUp');
        return element;
    }

    return user ? element : <Navigate to='/login' />;
};

export default PrivateRoute;
