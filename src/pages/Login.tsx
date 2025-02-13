import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import LoginForm from '../features/auth/LoginForm';

const Login = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='container mx-auto p-4'>
            {user ? (
                <div>
                    <h1 className='text-2xl font-bold'>
                        Welcome, {user.email}
                    </h1>
                    <button
                        onClick={() => signOut(auth)}
                        className='bg-red-500 text-white p-2 rounded'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <>
                    <h1 className='text-2xl font-bold'>Login</h1>
                    <LoginForm />
                </>
            )}
        </div>
    );
};

export default Login;
