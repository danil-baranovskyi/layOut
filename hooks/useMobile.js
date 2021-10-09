import { useCallback, useEffect, useState } from "react";

const useMobile = (deviceWidth = 570) => {
    const [isMobile, setMobile] = useState(typeof document !== "undefined" ? document.body.offsetWidth <= deviceWidth : null);

    const resize = useCallback(() => {
        setMobile(typeof document !== "undefined" ? document.body.offsetWidth <= deviceWidth : null);
    }, [setMobile, deviceWidth]);

    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [resize]);

    return [isMobile];
};

export default useMobile;