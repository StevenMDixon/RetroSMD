import './styles/App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Quote, Home, Services, Payment, About, OrderDetails } from './pages/'
import Header from './modules/header';

function App() {
    return (
        <Router>
            <div className="App">
            <Header />
                <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Quote" element={<Quote />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/About" element={<About />} />
                <Route path="/Pay" element={<Payment />} />
                <Route path="/Order" element={<OrderDetails />} />
                
            </Routes >
        </div>
        </Router>
    );
}

export default App;