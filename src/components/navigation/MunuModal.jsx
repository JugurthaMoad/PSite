import { motion, AnimatePresence } from "framer-motion";

import NavElements from "./NavElements";
import AppCloseIcon from "../../icons/AppCloseIcon";
const MenuModal = ({ handleClick, show }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={show}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {show && (
          <div onClick={handleClick} className="modal_container">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal_header">
                <AppCloseIcon className="icons" handleClick={handleClick} />
              </div>
              <div className="modal_body">
                {" "}
                <NavElements
                  handleClick={handleClick}
                  className="m_nav_elements_container"
                />
                <p className="copyrights">
                  &copy;2022. Made with passion by{" "}
                  <span className="copyrights_author">
                    <a
                      href="https://github.com/JugurthaMoad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jugurtha Moad
                    </a>
                  </span>
                  . <br />
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuModal;
