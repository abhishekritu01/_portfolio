'use client'
import {useParallax} from "react-scroll-parallax";

const ScrollerComponent = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
    });
    return (
        <>
            <div ref={parallax.ref} className="spinner">
                😵‍💫
                <div className="diamond h-16">💎</div>
                <div className="clown">🤡</div>
                <div className="money">💰</div>
                <div className="hand">👌🏻</div>
            </div>

        </>
    )
}
export default ScrollerComponent;