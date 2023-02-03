import { useEffect, useState } from "react";

export function useScrollY() {
    //scrollY
    const [scrollY, setScrollY] = useState(0);

    function handlerScrollY() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY)
    }

    useEffect(() => {
        handlerScrollY();
        window.addEventListener('scroll', handlerScrollY);
        return () => {
            window.removeEventListener('scroll', handlerScrollY);
        }
    }, []);
    return ({ scrollY });
}