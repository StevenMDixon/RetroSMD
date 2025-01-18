import './styles/app.css';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Quote, Main, Payment, About, OrderDetails } from './pages/'
import Header from './modules/header';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="AppContent">
                    <Routes >
                        <Route path="/" element={<Main />} />
                        <Route path="/Quote" element={<Quote />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Pay" element={<Payment />} />
                        <Route path="/Order" element={<OrderDetails />} />
                    </Routes >
                </div>
            </div>
        </Router>
    );
}

export default App;