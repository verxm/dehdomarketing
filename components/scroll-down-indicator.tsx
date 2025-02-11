'use client'

import { motion } from "framer-motion";
import { FaLongArrowAltDown } from "react-icons/fa";

const ScrollDownIndicator = () => {
    return (
        <div className="flex flex-row justify-end pb-5 mt-[-18px] pr-6">
            <motion.div animate={{
                y: [0, 5, 0]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
            }}>
                <FaLongArrowAltDown className="absolute text-gray-500 opacity-60" />
            </motion.div>
        </div>
    );
}

export default ScrollDownIndicator;