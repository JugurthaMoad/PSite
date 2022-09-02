import React from "react";
import NavElements from "./NavElements";
import Logo from "../../components/logo";
import { motion } from "framer-motion";
const Nnav = () => {
  return (
    <div className="n_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Logo />
      </motion.div>

      <NavElements handleClick={null} className="n_nav_container" />
    </div>
  );
};

export default Nnav;
