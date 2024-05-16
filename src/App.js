import { Route, Routes } from "react-router";
import About from "./Component/About";
import BookATable from "./Component/BookATable";
import ChefSingle from "./Component/ChefSingle";
import Contact from "./Component/Contact";
import FAQ from "./Component/FAQ";
import Gallery from "./Component/Gallery";
import GallerySingle from "./Component/GallerySingle";
import Home from "./Component/Home";
import NoPageFound from "./Component/NoPageFound";
import OrderViaApp from "./Component/OrderViaApp";
import OrderViaAppSingle from "./Component/OrderViaAppSingle";
import OurChefs from "./Component/OurChefs";
import OurMenu from "./Component/OurMenu";
import Recipe from "./Component/Recipe";
import Footer from "./Reuse/Footer";
import Navbar from "./Reuse/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-theme">
        <Navbar />
      </div>

      <Routes>
        <Route default element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoPageFound />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="ourmenu" element={<OurMenu />}></Route>
        <Route path="bookatable" element={<BookATable />}></Route>
        <Route path="ourchefs" element={<OurChefs />}></Route>
        <Route path="chefsingle" element={<ChefSingle />}></Route>
        <Route path="recipe" element={<Recipe />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="gallerysingle" element={<GallerySingle />}></Route>
        <Route path="orderviaapp" element={<OrderViaApp />}></Route>
        <Route path="orderviaappsingle" element={<OrderViaAppSingle />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>

      <div className="bg-theme pt-5">
      <Footer />
      </div>
    </>
  );
}

export default App;
