'use client';
import { useEffect } from 'react';
import BackgroundParallax from './components/Parallex';
import Description from './components/Description';
import Section from './components/Section';

import Lenis from 'lenis'
export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main>
            <BackgroundParallax />
            <Description />
            <div className='h-screen'>
                <Section />
            </div>
        </main>
    );
}