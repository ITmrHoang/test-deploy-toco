import classNames from "classnames/bind";
import styles from "./Intro.module.css";
import { IntroData } from "./IntroData";

const cx = classNames.bind(styles);

const Intro = () => {
    return (
        <div className={cx("intro-container")}>
            <div className={cx("intro-banner")}>Giới thiệu</div>
            <div className={cx("intro-content")}>
                <div className={cx("content-container")}>
                    {IntroData.map((item) => (
                        <div className={cx("item-content")} key={item.id}>
                            {item.content}
                        </div>
                    ))}
                </div>
                <div className={cx("img-container")}>
                    <img src="https://tocotocotea.com/wp-content/uploads/2021/03/1.webp" alt="" />
                    <img src="https://tocotocotea.com/wp-content/uploads/2021/03/2.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
