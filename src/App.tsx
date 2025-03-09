import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import BottomNavbar from './components/BottomNavbar';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
                <BottomNavbar />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
