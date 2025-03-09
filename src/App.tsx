import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
// import Navbar from './components/Navbar';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                {/* <Navbar /> */}
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
