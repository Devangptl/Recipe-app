import { Route,Routes , Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetail from "./pages/RecipeDetail";
import Recipes from "./components/Recipes";
import NavRacipes from "./components/NavRacipes";



function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Navbar/>} /> */}
        <Route index element={<Home/>} />
        <Route path="recipes/:id" element={<RecipeDetail/>} />
        <Route path="/recipes" element={<NavRacipes/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
