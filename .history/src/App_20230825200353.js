import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {p}
function App() {
    return ( <Router>
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    </Router>)
}

export default App;
