import classNames from "classnames/bind";
import styles from "./Footer.module.css";
import { About, Policy } from "./FooterData";
import { Place, Call, Mail, Facebook, Instagram, YouTube, Twitter, Google } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div>
            <div className={cx("container-footer")}>
                <div className={cx("footer-overlay")}></div>
                <div className={cx("footer-wrapper")}>
                    <div className={cx("logo-footer")}>
                        <img
                            src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/ft_logo.png"
                            alt=""
                        />
                    </div>
                    <div className={cx("infor-footer")}>
                        <p className={cx("footer-heading")}>CÔNG TY CP TM & DV TACO VIỆT NAM</p>

                        <div className={cx("footer-line")}>
                            <Place style={{ color: "#d3b673", marginRight: "8px" }} />
                            <span className={cx("text-info")}>
                                Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
                            </span>
                        </div>
                        <div className={cx("footer-line")}>
                            <Call style={{ color: "#d3b673", marginRight: "8px" }} />
                            <span className={cx("text-info")}>1900.63.69.36</span>
                        </div>
                        <div className={cx("footer-line")}>
                            <Mail style={{ color: "#d3b673", marginRight: "8px" }} />
                            <span className={cx("text-info")}>info@tocotocotea.com</span>
                        </div>
                        <div className={cx("footer-line")}>
                            <span className={cx("text-info")}>Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.</span>
                        </div>
                        <div className={cx("footer-line")}>
                            <span className={cx("text-info")}>Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.</span>
                        </div>
                        <div className={cx("icon-action")}>
                            <Facebook style={{ color: "#d3b673", marginRight: "20px" }} />
                            <Instagram style={{ color: "#d3b673", marginRight: "20px" }} />
                            <YouTube style={{ color: "#d3b673", marginRight: "20px" }} />
                            <Twitter style={{ color: "#d3b673", marginRight: "20px" }} />
                            <Google style={{ color: "#d3b673", marginRight: "20px" }} />
                        </div>
                        <div className={cx("icon-download")}>
                            <img
                                src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/Googleplay.png"
                                alt=""
                            />
                            <img
                                src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/Appstore.png"
                                alt=""
                            />
                            <img
                                src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/bo_cong_thuong_grande.png"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={cx("footer-list")}>
                        <p className={cx("footer-heading")}>VỀ CHÚNG TÔI</p>
                        {About.map((item) => (
                            <ul className={cx("footer-list-item")} key={item.id}>
                                <li>{item.title}</li>
                            </ul>
                        ))}
                    </div>
                    <div className={cx("footer-list")}>
                        <p className={cx("footer-heading")}>CHÍNH SÁCH</p>
                        {Policy.map((item) => (
                            <ul className={cx("footer-list-item")} key={item.id}>
                                <li>{item.title}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className={cx("footer-bottom")}>
                    <div className={cx("left-bottom")}>
                        ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản Việt Nam
                    </div>
                    <div className={cx("right-bottom")}>Copyrights © 2019 by ToCoToCoTea. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
