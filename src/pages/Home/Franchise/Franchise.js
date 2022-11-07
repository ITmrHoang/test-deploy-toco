import classNames from "classnames/bind";
import styles from "./Franchise.module.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const cx = classNames.bind(styles);

const Franchise = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("franchise")}>
                <div className={cx("franchise-left")}>
                    <SectionTitle
                        title="ToCoToCo Franchise"
                        logan="NHƯỢNG QUYỀN"
                        content="Gia nhập đế chế 300 TRIỆU USD. Nếu bạn bắt đầu kinh doanh khởi nghiệp ẩm thực, hoặc muốn đầu tư vào lĩnh vực này, thương hiệu TocoToco chắc chắn sẽ là một lựa chọn đáng cân nhắc cho bạn."
                    />
                </div>
                <div className={cx("franchise-right")}>
                    <img
                        className={cx("franchise-img")}
                        src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/img_home_franchise.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Franchise;
