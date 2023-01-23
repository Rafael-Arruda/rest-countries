import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from '../components/Header';

import Home from '../pages/Home';
import Details from '../pages/Details';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details/:name' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}