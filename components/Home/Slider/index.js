import React from "react";
import styles from "./styles.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import Slide from "./Slide";
import girlFinger from "../../../public/girlFinger.svg";
import smiledMan from "../../../public/smileMan.svg";
import cupMan from "../../../public/cupMan.svg";
import girlNoteBook from "../../../public/girlNotebook.svg";
import slidesData from "../../../locales/en/home/slides.json";

import SwiperCore, {
    Navigation
} from 'swiper';
import cn from "classnames";

SwiperCore.use([Navigation]);

const images = [
    girlFinger,
    smiledMan,
    cupMan,
    girlNoteBook
]

const Slider = () => {
    return (
        <>
            <div className={cn(styles.sliderContainer, "mainSlider")}>
                <Swiper
                    spaceBetween={200}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.button-prev',
                        nextEl: '.button-next'
                    }}
                    pagination={{clickable: true}}
                >
                    {slidesData.items.map((el, i) => {
                        return <SwiperSlide key={i}>
                            <Slide
                                key={i}
                                icon={el.info.icon}
                                header={el.info.header}
                                subHeader={el.info.subheader}
                                footer={el.info.footer}
                                imageSrc={images[i]}
                                imageWidth={710}
                                imageHeight={485}
                            />
                        </SwiperSlide>
                    })}

                </Swiper>
            </div>
        </>
    );
}

export default Slider;