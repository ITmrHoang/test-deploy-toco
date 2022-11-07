import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { publicRoutes } from "./routes/index";

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const NullLayout = route.layout === null ? Fragment : Layout;
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <NullLayout>
                                    <Page />
                                </NullLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
