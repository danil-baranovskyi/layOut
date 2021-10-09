import React from 'react';
import styles from "./styles.module.scss";
import Image from "next/image.js";
import cn from "classnames";

const GeneralLink = (
    {
        iconSrc,
        iconWidth,
        iconHeight,
        textContent,
        wrapperStyles,
        linkStyles,
        iconWrapperClass = "",
        wrapperClass = ""
    }) => {
    return (
        <div className={cn(styles.generalLinkWrapper, wrapperClass)} style={wrapperStyles}>
            <a className={`${styles.generalLink}`} style={linkStyles}>{textContent}</a>
            <div className={cn(iconWrapperClass)}>
                <Image src={iconSrc} width={iconWidth} height={iconHeight}/>
            </div>
        </div>
    );
};

export default GeneralLink;