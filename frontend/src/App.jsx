import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import BookingForm from "./pages/BookingForm";
import Gallery from "./pages/Gallery";
import UploadPhoto from "./pages/UploadPhoto";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route element={<Layout />}>


          <Route
            path="/booking"
            element={<BookingForm />}
          />



          <Route
            path="/gallery"
            element={<Gallery />}
          />



          <Route
            path="/upload-photo"
            element={<UploadPhoto />}
          />


        </Route>


      </Routes>


    </BrowserRouter>

  );

}


export default App;