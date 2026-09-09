import { Routes ,Route} from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ResumeGenerator from "./pages/ResumeGenerator";
import UserFrom from "./pages/UserFrom";
import History from "./pages/History";
import Pnf from "./pages/Pnf";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ViewResume from "./pages/ViewResume";


function App() {
    return (
        <>
            <Header />
            <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/resume' element={<ResumeGenerator/>}/>
              <Route path='/form' element={<UserFrom/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/resume/:id/view' element={<ViewResume/>}/>
              <Route path='/*' element={<Pnf/>}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
