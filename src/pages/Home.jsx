import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <motion.h1 variants={textVariants} initial="hidden" animate="visible">
        Welcome to Home Page
      </motion.h1>

      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{
          width: "100px",
          height: "100px",
          background: "blue",
          margin: "20px auto",
          borderRadius: "15px",
        }}
      />
    </motion.div>
  );
};

export default Home;
