import Container from "./Container";
import ContactSection from "./ContactSection";
import AppDownIcon from "../icons/AppDownIcon";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex_col_container"
      >
        <h1 className="name">Jugurtha Moad</h1>
        <h2 className="name_job">WEB & MOBILE APP DEVELOPER.</h2>

        <ContactSection />
      </motion.div>
      <div className="down_icon_container">
        <AppDownIcon className="down_icon" />
      </div>
    </Container>
  );
};

export default Home;
