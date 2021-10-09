import React from 'react';
import styles from "./styles.module.scss";
import data from "/locales/en/privacy/main.json";

const PrivacyPreview = () => {
    return (
        <section className={styles.privacyPreview}>
            <h2 className={styles.privacyPreviewHeader}>{data.preview.header}</h2>
            <p className={styles.privacyPreviewUpdated}>
                {data.preview.updated}
                <span className={styles.privacyPreviewUpdatedInfo}>August 13, 2021</span>
            </p>
            <p className={styles.privacyPreviewText}>{data.preview["text-content"].p1}</p>
            <p className={styles.privacyPreviewText}>{data.preview["text-content"].p2}</p>
            <p className={styles.privacyPreviewText}>{data.preview["text-content"].p3}</p>
        </section>
    );
};

export default PrivacyPreview;