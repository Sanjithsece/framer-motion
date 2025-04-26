import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>About Page</h1>
      
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          margin: "20px auto",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Drag Me
      </motion.div>
    </motion.div>
  );
};

export default About;
