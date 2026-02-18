import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../navs/Header";
import Footer from "../navs/Footer";

const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-tertiary/10 text-tetiary">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="app-container pt-7 lg:pt-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MainLayout;
