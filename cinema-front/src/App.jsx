import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RepertoirePage from "./pages/Repertoire";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<RepertoirePage />} />
                    <Route
                        exact
                        path="/repertoire"
                        element={<RepertoirePage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
