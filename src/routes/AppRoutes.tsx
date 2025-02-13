import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route
                path='/login'
                element={<PublicRoute element={<Login />} />}
            />
            <Route
                path='/signup'
                element={<PublicRoute element={<Signup />} />}
            />

            {/* Private Routes */}
            <Route path='/' element={<PrivateRoute element={<Home />} />} />
            <Route
                path='/profile'
                element={<PrivateRoute element={<Profile />} />}
            />

            {/* 404 Page */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
