import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './slider.css';
import Image1 from "./assets/image1.jpg";
import Image2 from "./assets/image2.jpg";
import Image3 from "./assets/image3.webp";
import Image4 from "./assets/image4.jpg";

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className="mt-4 w-full h-[300px]">
            <AutoplaySlider animation="cubeAnimation" play={true} mobileTouch={true} className="w-full h-full">
                <div className="w-full h-full">
                    <img src={Image1} alt="Slide 1" className="object-cover w-full h-full" />
                </div>
                <div className="w-full h-full">
                    <img src={Image2} alt="Slide 2" className="object-cover w-full h-full" />
                </div>
                <div className="w-full h-full">
                    <img src={Image3} alt="Slide 3" className="object-cover w-full h-full" />
                </div>
                <div className="w-full h-full">
                    <img src={Image4} alt="Slide 3" className="object-cover w-full h-full" />
                </div>
            </AutoplaySlider>
        </div>
    );
}

export default Slider;
