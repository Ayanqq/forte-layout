import {Route, Routes} from "react-router";
import {Dashboard} from "./pages/Dashboard/Dashboard.tsx";
import {Auth} from "./pages/Auth/Auth.tsx";

const App = () => {
    return (
        <Routes>
            <Route path={'/auth'} element={<Auth/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
        </Routes>
    );
};


export default App
