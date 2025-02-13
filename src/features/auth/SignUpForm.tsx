import { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Button from '../../components/Button';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async () => {
        setError('');
        setSuccess('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await signOut(auth); // Logs out the user immediately after signup
            setSuccess('Signup successful! You can now log in.');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className='p-4 max-w-sm mx-auto'>
            <h2 className='text-xl font-bold'>Sign Up</h2>
            {error && <p className='text-red-500'>{error}</p>}
            {success && <p className='text-green-500'>{success}</p>}
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
            <Button text='Sign Up' onClick={handleSignup} />
        </div>
    );
};

export default SignupForm;
