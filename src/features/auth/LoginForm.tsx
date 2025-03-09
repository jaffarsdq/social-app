import { useState } from 'react';
import { auth } from '../../lib/firebase';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import Button from '../../components/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const handleGoogleSignIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        console.log('Google Sign-In Successful');
    } catch (error) {
        console.error('Google Sign-In Error', error);
    }
};

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='max-w-sm mx-auto pt-1 pb-5 space-y-4'>
            <h2 className='py-3 text-2xl font-semibold text-center text-gray-800'>
                Welcome!
            </h2>

            {error && (
                <p className='text-red-500 text-sm text-center'>{error}</p>
            )}

            <div className='relative'>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none shadow-sm'
                />
            </div>

            <div className='relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none shadow-sm pr-10'
                />
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                >
                    {showPassword ? (
                        <EyeSlashIcon className='w-5 h-5' />
                    ) : (
                        <EyeIcon className='w-5 h-5' />
                    )}
                </button>
            </div>

            <Button
                text='Login'
                onClick={handleLogin}
                className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition shadow-md'
            />

            <button
                onClick={handleGoogleSignIn}
                className='w-full flex items-center justify-center bg-slate-800 text-white p-3 rounded-3xl hover:bg-gray-700 transition shadow-md'
            >
                <svg className='w-5 h-5 mr-2' viewBox='0 0 48 48'>
                    <path
                        fill='#4285F4'
                        d='M46.3 24.6c0-1.6-.1-3.2-.4-4.7H24v9.5h12.7c-.6 3-2.2 5.5-4.6 7.2v6h7.4c4.3-3.9 6.8-9.7 6.8-16z'
                    />
                    <path
                        fill='#34A853'
                        d='M24 48c6.2 0 11.5-2 15.3-5.4l-7.4-6c-2 1.3-4.5 2-7.9 2-6.1 0-11.2-4.1-13-9.5H3.2v5.9C7 42 14.8 48 24 48z'
                    />
                    <path
                        fill='#FBBC05'
                        d='M11 28.1c-.5-1.3-.8-2.6-.8-4s.3-2.7.8-4V14H3.2C1.2 18 0 21.8 0 24s1.2 6 3.2 10l7.8-5.9z'
                    />
                    <path
                        fill='#EA4335'
                        d='M24 9.5c3.3 0 6.3 1.1 8.7 3.2l6.5-6.5C34.9 2.3 29.6 0 24 0 14.8 0 7 6 3.2 14l7.8 5.9c1.8-5.4 6.9-9.5 13-9.5z'
                    />
                </svg>
                Login with Google
            </button>
        </div>
    );
};

export default LoginForm;
