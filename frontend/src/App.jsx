import "./App.css";
import BookingForm from "./components/BookingForm";
import Gallery from "./components/Gallery";
import PhotoUpload from "./components/PhotoUpload";

function App() {
  return (
    <div>
      <BookingForm />

      <hr />

      <Gallery />

      <hr />

      <PhotoUpload />
    </div>
  );
}

export default App;