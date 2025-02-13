import LoginForm from '../features/auth/LoginForm';

const Login = () => {
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <LoginForm />
        </div>
    );
};

export default Login;
