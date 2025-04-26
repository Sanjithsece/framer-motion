import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#1a1a1a",
        color: "white",
        justifyContent: "center",
      }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
