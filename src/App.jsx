import SignInPage from './pages/signin_page/SignInPage.jsx'
import SignUpPage from './pages/signup_page/SignUpPage.jsx';
import HomePage from './pages/home_page/HomePage.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />

                <Route path='/home' element={<HomePage/>} />

                <Route path="/login" element={<SignInPage />} />

                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App