import classNames from "classnames/bind";
import { dataSlider } from "./dataSlider";
import Slider from "react-slick";
import styles from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseOutlined } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: "linear",
    };

    return (
        <div className={cx("container-slider")}>
            <Slider {...settings}>
                {dataSlider.map((item) => (
                    <img key={item.id} className={cx("item-slider")} src={item.image} alt="" />
                ))}
            </Slider>
            <div className={cx("overlay")}>
                <div className={cx("icon-mouse")}>
                    <MouseOutlined />
                </div>
                <span className={cx("title-mouse")}>Cuộn xuống</span>
            </div>
        </div>
    );
};

export default Sliders;
