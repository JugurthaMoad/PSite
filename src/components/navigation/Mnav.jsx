import { useState } from "react";
import { motion } from "framer-motion";

import AppMenuIcon from "../../icons/AppMenuIcon";
import MenuModal from "./MunuModal";
import Logo from "../../components/logo";
const Mnav = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShow(!show);
  };
  console.log("show = ", show);
  return (
    <div className="m_nav_container">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 200,
          duration: 0.5,
        }}
      >
        <AppMenuIcon handleClick={handleClick} className="icons menu_icon" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <Logo />
      </motion.div>

      <MenuModal handleClick={handleClick} show={show} />
    </div>
  );
};

export default Mnav;

/*   <AppCloseIcon className="icons" /> */
