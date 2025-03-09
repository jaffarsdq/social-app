import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.png';
import img3 from '../assets/img4.svg';
import img4 from '../assets/img5.svg';
import img5 from '../assets/img6.png';
import img6 from '../assets/img7.png';
import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { AnimatePresence, motion } from 'framer-motion';
import LoginForm from '../features/auth/LoginForm';

const backgroundImages = [
    [img1, img2, img1, img2, img1], // Column 1
    [img3, img4, img3, img4, img3], // Column 2
    [img5, img6, img5, img6, img5], // Column 3
];

const Login = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className='relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50'>
            {/* Background Grid */}
            <div className='absolute inset-0 grid grid-cols-3 gap-2 opacity-90'>
                {backgroundImages.map((column, colIndex) => (
                    <motion.div
                        key={colIndex}
                        className='relative w-full h-[200vh] flex flex-col'
                        initial={{ y: 0 }}
                        animate={{ y: '-100%' }}
                        transition={{
                            delay: colIndex * 1.5, // More spacing between staggered columns
                            duration: 50, // Smooth slow transition
                            repeat: Infinity,
                            ease: 'linear', // Constant speed
                            repeatType: 'mirror', // Avoid abrupt jumps
                        }}
                    >
                        {[...column, ...column].map((src, index) => (
                            <motion.img
                                className='h-full w-full bg-cover bg-center py-1'
                                key={`${src}-${index}`} // Ensure unique keys
                                src={src}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }} // Smooth fade-in
                            />
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='absolute inset-x-0 bottom-0 mx-auto w-full bg-white backdrop-blur-sm p-0 rounded-t-[50px] shadow-lg border border-white/20'
            >
                {user ? (
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold'>
                            Welcome, {user.email}
                        </h1>
                        <button
                            onClick={() => signOut(auth)}
                            className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <LoginForm />
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default Login;
