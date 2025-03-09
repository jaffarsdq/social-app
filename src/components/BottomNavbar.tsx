import { Link, useLocation } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import {
    HomeIcon as HomeSolid,
    UserIcon as UserSolid,
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';

import {
    HomeIcon as HomeOutline,
    UserIcon as UserOutline,
} from '@heroicons/react/24/outline';

import { motion } from 'framer-motion';

const BottomNavbar = () => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) return null;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User logged out successfully');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const navItems = [
        {
            name: 'Home',
            path: '/',
            solidIcon: HomeSolid,
            outlineIcon: HomeOutline,
        },
        {
            name: 'Profile',
            path: '/profile',
            solidIcon: UserSolid,
            outlineIcon: UserOutline,
        },
    ];

    return (
        <nav className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gray-900 text-white flex justify-around py-3 px-6 rounded-t-sm shadow-lg border border-gray-700'>
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        to={item.path}
                        key={item.name}
                        className='relative flex flex-col items-center'
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0.7 }}
                            animate={{
                                scale: isActive ? 1.2 : 1,
                                opacity: isActive ? 1 : 0.6,
                            }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        >
                            {isActive ? (
                                <item.solidIcon className='w-6 h-6 text-blue-400' />
                            ) : (
                                <item.outlineIcon className='w-6 h-6 text-gray-400' />
                            )}
                        </motion.div>
                        {/* <span
                            className={`text-xs mt-1 ${
                                isActive ? 'text-blue-400' : 'text-gray-400'
                            }`}
                        >
                            {item.name}
                        </span> */}
                        {/* {isActive && (
                            <motion.div
                                className='absolute -bottom-2 w-10 h-2 bg-blue-500 rounded-full'
                                layoutId='activeIndicator'
                            />
                        )} */}
                    </Link>
                );
            })}

            {user ? (
                <button
                    onClick={handleLogout}
                    className='flex flex-col items-center'
                >
                    <ArrowRightOnRectangleIcon className='w-6 h-6 text-gray-400' />
                    {/* <span className='text-xs text-gray-400'>Logout</span> */}
                </button>
            ) : (
                <Link to='/login' className='flex flex-col items-center'>
                    <ArrowLeftOnRectangleIcon className='w-6 h-6 text-gray-400' />
                    <span className='text-xs text-gray-400'>Login</span>
                </Link>
            )}
        </nav>
    );
};

export default BottomNavbar;
