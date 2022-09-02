import { motion } from "framer-motion";

import Nnav from "./Nnav";
import Mnav from "./Mnav";
import React from "react";
const Nav = () => {
  return (
    <motion.div
      className="nav"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 250 }}
    >
      <Nnav />
      <Mnav />
    </motion.div>
  );
};

export default Nav;
