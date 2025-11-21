import SignInPage from './pages/signin_page/SignInPage'
import SignUpPage from './pages/signup_page/SignUpPage';
import HomePage from './pages/home_page/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){

    return (
        <BrowserRouter basename='/Proview'>
            <Routes>
                <Route path="/" element={<SignInPage />} />

                <Route path='/home' element={<HomePage />} />

                <Route path="/login" element={<SignInPage />} />

                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App