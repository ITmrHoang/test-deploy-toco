import classNames from "classnames/bind";
import styles from "./SectionTitle.module.css";

const cx = classNames.bind(styles);

const SectionTitle = (props) => {
    return (
        <div className={cx("section-title")}>
            <h3 className={cx("title-toco")}>{props.title}</h3>
            <h1 className={cx("title-logan")}>{props.logan}</h1>
            <div className={cx("icon-bottom")}>
                <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/home_line.webp" alt="" />
            </div>
            <p className={cx("content")}>{props.content}</p>
        </div>
    );
};

export default SectionTitle;
