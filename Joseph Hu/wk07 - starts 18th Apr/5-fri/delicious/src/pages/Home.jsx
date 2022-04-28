import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
//THIS IS OUR HOME PAGE
import React from 'react'
import {motion} from "framer-motion"

function home() {
  return (
    //when the page loads in it fades in
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
        {/* rendering these two components in home page */}
        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default home
//we need to render home somewhere, so we do that in App