import './App.css';
import Quote from './pages/quote'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    

    return (
        <Router>
            <Routes >
                <Route path="/quote" element={<Quote /> } />
            </Routes >
        </Router>
    );
}

export default App;