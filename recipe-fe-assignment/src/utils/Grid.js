import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
  grid-gap: 2rem;
`;

export default Grid;
