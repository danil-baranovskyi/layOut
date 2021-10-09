import React from 'react';
import styles from "./styles.module.scss";
import Image from "next/image.js";
import sneakerWorld from "../../../public/sneaker.png"
import cosyspeed from "../../../public/cosyspeed.png";
import lalaLogo from "../../../public/lalaLogo.png";
import annaLogoPng from "../../../public/annaLogoPng.png";
import {Grid, Row, Col} from 'react-flexbox-grid/dist/react-flexbox-grid'
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import cn from "classnames";

SwiperCore.use([Navigation]);

const Featured = () => {
    return (
        <section className={styles.featured}>
            <div className={styles.featuredDesktopContent}>
                <h3 className={styles.featuredHeader}>Featured by</h3>
                <Grid className={styles.featuredContainer}>
                    <Row middle="xs">
                        <Col sm={6} md={6} lg={3}>
                            <Image src={sneakerWorld}/>
                        </Col>
                        <Col sm={6} md={6} lg={3} end="md">
                            <Image src={cosyspeed}/>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Image src={lalaLogo}/>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Image src={annaLogoPng}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className={cn(styles.featuredMobileContent)}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: "."+styles.featuredSlidePrev,
                        nextEl: "."+styles.featuredSlideNext
                    }}
                >
                    <SwiperSlide className={styles.featuredSlide}>
                        <div className={styles.featuredSlideWrapper}>
                            <Image src={sneakerWorld}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.featuredSlideWrapper}>
                            <Image src={cosyspeed}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredSlide}>
                        <div className={styles.featuredSlideWrapper}>
                            <Image src={lalaLogo}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.featuredSlide}>
                        <div className={styles.featuredSlideWrapper}>
                            <Image src={annaLogoPng}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className={styles.featuredSlidePrev}/>
                <button className={styles.featuredSlideNext}/>
            </div>
        </section>
    );
};

export default Featured;