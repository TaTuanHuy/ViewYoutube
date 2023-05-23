import Header from "./header/header"
import SideBar from "./BodyConponent/SideBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyContent from "./BodyConponent/bodyContent"
import ProfileVideo from "./profileVideo/profile"
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
function LayOut(){
    return(
       <div>
            <header>
                <Header />
            </header>
            <div id="body">
                <div className="row">
                    <div className="col-sm-2">
                        <SideBar />
                    </div>
                    <div className="col-sm-10">
                        <div className="container">
                        <BrowserRouter>
                        <Routes>
                            <Route index element={<BodyContent />} />
                            <Route path="/:id" element={<ProfileVideo/>} />
                            <Route path="/SignIn" element={<SignIn />} />
                            <Route path="/Register" element={<Register />} />
                        </Routes>
                        </BrowserRouter>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    )
}

export default LayOut