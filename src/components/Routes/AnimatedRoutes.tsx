import { Route, Routes, useLocation } from "react-router-dom";
import { HeroSection } from "../Hero";
import { SobreMim } from "../About";
import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes(){
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HeroSection />} />
                <Route path="/sobremim" element={<SobreMim />} />
            </Routes>
        </AnimatePresence>
    );
}