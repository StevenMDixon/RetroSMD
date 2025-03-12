import './styles/app.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { useEffect } from 'react'
import { Quote, Main, Faq, OrderDetails, Services, Logo } from './pages/'
import Header from './modules/header';
import Footer from './modules/footer';

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Header />
                <div className="AppContent">
                    <Routes >
                        <Route path="/" element={<Main />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Quote" element={<Quote />} />
                        <Route path="/Faq" element={<Faq />} />
                        <Route path="/Order" element={<OrderDetails />} />
                        <Route path="/Logo" element={<Logo />} />
                    </Routes >
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );
}

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}


export default App;