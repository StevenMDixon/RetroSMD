import './App.css';
import { Quote, Home, Services, Payment, About} from './pages/'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    

    return (
        <Router>
            <Routes >
                <Route path="/Quote" element={<Quote />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Pay" element={<Payment />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes >
        </Router>
    );
}

export default App;