import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "../Components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleGetStartedClick = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      navigate("/homemid"); // Redirect to the homemid route after 2 seconds
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold">
            Loading...</div>
        </div>
      ) : (
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Dive into the Stream of Real-Time Coding.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              With SyntaxSync.
            </div>
            <button
              onClick={handleGetStartedClick}
              className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            >
              Get Started
            </button>
          </motion.div>
        </AuroraBackground>
      )}
    </div>
  );
}

export default AuroraBackgroundDemo;