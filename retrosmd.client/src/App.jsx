import './styles/app.css';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Quote, Main, Faq, OrderDetails } from './pages/'
import Header from './modules/header';
import Footer from './modules/footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="AppContent">
                    <Routes >
                        <Route path="/" element={<Main />} />
                        <Route path="/Quote" element={<Quote />} />
                        <Route path="/Faq" element={<Faq />} />
                        <Route path="/Order" element={<OrderDetails />} />
                    </Routes >
                </div>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;