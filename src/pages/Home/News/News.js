import classNames from "classnames/bind";
import styles from "./News.module.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";
import { NewsData } from "./NewData";
import { NewsVideoData } from "./NewsVideoData";

const cx = classNames.bind(styles);

const News = () => {
    return (
        <div className={cx("container")}>
            <SectionTitle title="Tin Tức và Khuyến Mãi" logan="KHÁM PHÁ TOCOTOCO NHẬN NGAY KHUYẾN MÃI" />
            <div className={cx("container-news")}>
                <div className={cx("news-left")}>
                    <div className={cx("top-left")}>
                        {NewsData.map(
                            (item) =>
                                item.id === 1 && (
                                    <div key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className={cx("title-left-news")}>
                                            {item.title}
                                            <Button title="XEM THÊM" />
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>

                    <div className={cx("bot-left")}>
                        {NewsData.map(
                            (item) =>
                                item.id > 1 && (
                                    <div className={cx("news-card")} key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className={cx("title-left-news")}>{item.title}</div>
                                    </div>
                                ),
                        )}
                    </div>
                </div>
                <div className={cx("news-right")}>
                    <div className={cx("top-video")}>
                        {NewsVideoData.map(
                            (item) =>
                                item.id === 1 && (
                                    <div className={cx("card-news-video")} key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className={cx("title-video")}>{item.title}</div>
                                    </div>
                                ),
                        )}
                    </div>
                    <div className={cx("bot-video")}>
                        {NewsVideoData.map(
                            (item) =>
                                item.id > 1 && (
                                    <div className={cx("card-news-video")} key={item.id}>
                                        <img className={cx("video-pre")} src={item.img} alt="" />
                                        <div className={cx("title-news-video")}>{item.title}</div>
                                    </div>
                                ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
