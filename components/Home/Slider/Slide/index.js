import styles from "./styles.module.scss";
import React from "react";
import Image from "next/image.js";
import Star from "../../../Star";

const Slide = ({imageSrc, icon, header, subHeader, footer}) => {
    return (
        <div className={styles.slideContainer}>
            <div className={styles.humans}>
                <Image src={imageSrc} alt="picture with people"/>
            </div>
            <div className={styles.slideInfo}>
                <span className={styles.slideIcon}>{icon}</span>
                <h3 className={styles.slideInfoHeader}>{header}</h3>
                <p className={styles.slideInfoSubHeader}>{subHeader}</p>
                <div className={styles.slideReviewsWrapper}>
                    <div className={styles.slideReviewsContainer}>
                        <span className={styles.slideReviewsHeader}>{footer.header}</span>
                        <div className={styles.slideReviewsStarsWrapper}>
                            <Star color="#ffc20a" className={styles.slideReviewsStar}/>
                            <Star color="#ffc20a" className={styles.slideReviewsStar}/>
                            <Star color="#ffc20a" className={styles.slideReviewsStar}/>
                            <Star color="#ffc20a" className={styles.slideReviewsStar}/>
                            <Star color="#ffc20a" className={styles.slideReviewsStar}/>
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <button className="button-prev"/>
                        <button className="button-next"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide;