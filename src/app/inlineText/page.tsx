"use client"
import Image from "next/image";
import gsap from "gsap"
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Inline() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const fourthText = useRef(null);
    const fifthText = useRef(null);
    const sixthText = useRef(null);
    const seventhText = useRef(null);
    const eigthText = useRef(null);
    const ninethText = useRef(null);
    const middleSlider = useRef(null)
    const slider = useRef(null)

    let xPercent = 0;
    let middleXPercent = 0;
    let direction = 1;
    let middleDirection = -1;

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(middleSlider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: true,
                onUpdate: e => middleDirection = -e.direction,
            },
        });
        requestAnimationFrame(middleAnimation);


        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: true,
                onUpdate: e => direction = e.direction,
            },
        });
        requestAnimationFrame(animation);
    }, []);

    const middleAnimation = () => {
        if (middleXPercent <= -100) middleXPercent = 0;
        if (middleXPercent >= 100) middleXPercent = 0;

        gsap.set(seventhText.current, { xPercent: middleXPercent });
        gsap.set(eigthText.current, { xPercent: middleXPercent });
        gsap.set(ninethText.current, { xPercent: middleXPercent });

        middleXPercent += 0.1 * middleDirection;
        requestAnimationFrame(middleAnimation);
    };

    const animation = () => {
        if (xPercent <= -100) xPercent = 0;
        if (xPercent >= 100) xPercent = 0;

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        gsap.set(thirdText.current, { xPercent: xPercent });
        gsap.set(fourthText.current, { xPercent: xPercent });
        gsap.set(fifthText.current, { xPercent: xPercent });
        gsap.set(sixthText.current, { xPercent: xPercent });

        xPercent += 0.2 * direction;
        requestAnimationFrame(animation);
    };

    return (
        <div className="relative h-[800px] w-screen bg-blue-500 overflow-x-hidden">
            {/* <Image src={`/africa.jpg`} width={1400} height={800} alt="image" /> */}
            <div className="absolute top-[20px] w-screen">
                <div className="relative flex overflow-x-hidden">
                    <p ref={firstText} className="text-[180px] ml-[20px] font-extrabold text-white">STORE PAY</p>
                    <p ref={secondText} className="text-[180px] font-extrabold text-white absolute -right-[50%]">STORE PAY</p>
                    <p ref={thirdText} className="text-[180px] font-extrabold text-white absolute -left-[77%]">STORE PAY</p>
                </div>
            </div>
            <div className="absolute top-[180px] w-screen">
                <div className="relative flex overflow-x-hidden">
                    <p ref={seventhText} className="text-[180px] ml-[20px] font-extrabold text-white">STORE PAY</p>
                    <p ref={eigthText} className="text-[180px] font-extrabold text-white absolute -right-[50%]">STORE PAY</p>
                    <p ref={ninethText} className="text-[180px] font-extrabold text-white absolute -left-[77%]">STORE PAY</p>
                </div>
            </div>
            <div className="absolute top-[340px] w-screen">
                <div className="relative flex overflow-x-hidden">
                    <p ref={fourthText} className="text-[180px] ml-[20px] font-extrabold text-white">STORE PAY</p>
                    <p ref={fifthText} className="text-[180px] font-extrabold text-white absolute -right-[50%]">STORE PAY</p>
                    <p ref={sixthText} className="text-[180px] font-extrabold text-white absolute -left-[77%]">STORE PAY</p>
                </div>
            </div>
        </div>
    );
}