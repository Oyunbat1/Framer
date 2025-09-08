"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Background from "../../../../public/img1.jpg"
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundParallax() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div ref={containerRef} className="h-screen overflow-hidden">
            <motion.div style={{ y }} className="relative h-full">
                <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
            </motion.div>
        </div>
    );
}
