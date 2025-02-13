import { useState } from 'react';
import Button from '../../components/Button';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        console.log('Signing up:', { email, password });
    };

    return (
        <div className='p-4 max-w-sm mx-auto'>
            <h2 className='text-xl font-bold'>Sign Up</h2>
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
