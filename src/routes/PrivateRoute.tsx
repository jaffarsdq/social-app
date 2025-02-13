import { Navigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { user } = useAuth();
    return user ? element : <Navigate to='/login' />;
};

export default PrivateRoute;
