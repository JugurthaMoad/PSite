import { motion } from "framer-motion";

const AppDownIcon = ({ handleClick, ...props }) => {
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ delay: 3, duration: 2 }}
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3.75 5.75L8 10.25l4.25-4.5"
        />
      </svg>
    </>
  );
};

export default AppDownIcon;
