import './App.css';
import Forecast from './pages/forecast';
import Car from './pages/car'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    

    return (
        <Router>
            <Routes >
                <Route path="/forecast" element ={ <Forecast /> } />
                <Route path="/carinfo" element ={ <Car /> } />
            </Routes >
        </Router>
    );
}

export default App;