import "./App.css";
import Carousel from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div id="about" className="about">
        <div className="mt-5">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default App;
