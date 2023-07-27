import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Sign_Up from "./Pages/Sign_Up";
import User_Table from "./Pages/User_Table";
import Edit_Profile from "./Pages/Edit_Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<> <Header/> <Home/> <Footer/> </>}></Route>
          <Route path="about" element={<> <Header/> <About/> <Footer/> </>}></Route>
          <Route path="login" element={<> <Login/> </>}></Route>
          <Route path="signup" element={<> <Sign_Up/> </>}></Route>
          <Route path="edituser/:id" element={<> <Edit_Profile/> </>}></Route>
          <Route path="userdata" element={<> <Header/> <User_Table/> <Footer/> </>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
