import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Notifications from "./pages/Notifications";
import Sidenav from "./components/Sidenav";
import Modal from './pages/Modal';
import Accordion from './pages/Accordion';
import Steps from './pages/Steps';
import Slider from './pages/Slider';
import Carousel from './pages/Carousel';
import Sidebar from './pages/Sidebar';
import Grid from './pages/Grid';
import SvgLoading from './pages/SvgLoading';
import Tabs from './pages/Tabs';

function App(){

    return (
        <BrowserRouter>
            <div className="app">
                
                <Sidenav />

                <main className="p__16 main">
                    <Routes>
                        <Route path="/" element={<Modal />} />
                        <Route path="/accordion" element={<Accordion />} />
                        <Route path="/steps" element={<Steps />} />
                        <Route path="/slider" element={<Slider />} />
                        <Route path="/carousel" element={<Carousel />} />
                        <Route path="/sidebar" element={<Sidebar />} />
                        <Route path="/grid" element={<Grid />} />
                        <Route path="/svg" element={<SvgLoading />} />
                        <Route path="/tabs" element={<Tabs />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Routes>
                </main>
            </div>
           
        </BrowserRouter>
    )
}

export default App;