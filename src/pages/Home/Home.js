import Sliders from "./Slider/Sliders";
import HotProducts from "./HotProduct/HotProducts";
import AboutUs from "./AboutUs/AboutUs";
import Franchise from "./Franchise/Franchise";
import News from "./News/News";

function Home() {
    return (
        <div>
            <Sliders />
            <HotProducts />
            <AboutUs />
            <Franchise />
            <News />
        </div>
    );
}

export default Home;
