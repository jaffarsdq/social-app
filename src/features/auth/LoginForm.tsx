import { useState } from 'react';
import { auth } from '../../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Button from '../../components/Button';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = async () => {
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login successful!');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className='p-4 max-w-sm mx-auto'>
            <h2 className='text-xl font-bold'>Login</h2>
            {error && <p className='text-red-500'>{error}</p>}
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border my-2'
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border my-2'
            />
            <Button text='Login' onClick={handleLogin} />
            <button
                onClick={handleGoogleSignIn}
                className='bg-blue-500 text-white p-2 rounded w-full my-2'
            >
                Login with Google
            </button>
        </div>
    );
};

export default LoginForm;
