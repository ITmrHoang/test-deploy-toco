import classNames from "classnames/bind";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";
import styles from "./AboutUs.module.css";

const cx = classNames.bind(styles);

const AboutUs = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("about-us")}>
                <img
                    src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/banner_about_us.png"
                    alt=""
                />
            </div>
            <div className={cx("position-about-us")}>
                <SectionTitle
                    title="ToCoToCo Story"
                    logan="VỀ CHÚNG TÔI"
                    content="Bên cạnh niềm tự hào về những ly trà sữa ngon - sạch - tươi, chúng tôi luôn tự tin mang đến khách hàng những trải nghiệm tốt nhất về dịch vụ và không gian."
                />
                <Button title="XEM THÊM" />
            </div>
        </div>
    );
};

export default AboutUs;
