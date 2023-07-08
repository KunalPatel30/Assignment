import React,{Suspense, lazy} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./Pages/About";
const Home = lazy(() => import('./Pages/Home'));
const Service = lazy(() => import('./Pages/Service'))
const Contact = lazy(() => import('./Pages/Contact'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<> <Header/> 
              <Suspense fallback={<div className="box"> Please Wait... Home is loading </div>}>
                <Home />
              </Suspense>
            <Footer/> </>}>
          </Route>

          <Route  path="about" element={<> <Header/> <About/> <Footer/> </>}></Route>

          <Route  path="services" element={<> <Header/> 
            <Suspense fallback={<div className="box"> Please Wait... Service is loading </div>}>
                <Service />
              </Suspense>
           <Footer/> </>}>
           </Route>

          <Route  path="contact" element={<> <Header/>
            <Suspense fallback={<div className="box"> Please Wait... Contact is loading </div>}>
              <Contact/>
            </Suspense>
            <Footer/> </>}>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
