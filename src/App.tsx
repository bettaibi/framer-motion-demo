import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Notifications from "./pages/Notifications";
import Sidenav from "./components/Sidenav";

function App(){

    return (
        <BrowserRouter>
            <div className="app">
                
                <Sidenav />

                <main className="p__16 main">
                    <Routes>
                        <Route path="/" element={<Notifications />} />
                    </Routes>
                </main>
            </div>
           
        </BrowserRouter>
    )
}

export default App;