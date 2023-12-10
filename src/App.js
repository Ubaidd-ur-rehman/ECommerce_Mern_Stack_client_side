import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from './components/Home/Home'
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import AppContext from "./utils/context";
import BarLoader from "react-spinners/BarLoader";
function App() {
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000)
    }, [])
    return (

        <BrowserRouter>
            <AppContext>

                <Header />
                {loading ?
                    <div className='spinner'><BarLoader id='loadingbar' color="#ad45de" loading={loading} size={"50"} aria-label="Loading Spinner" data-testid="loader" /></div>
                    :
                    <>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/category/:id" element={<Category />} />
                            <Route path="/product/:id" element={<SingleProduct />} />
                        </Routes>
                        <Newsletter />
                        <Footer />
                    </>

                }
            </AppContext>
        </BrowserRouter>



    );
}

export default App;
