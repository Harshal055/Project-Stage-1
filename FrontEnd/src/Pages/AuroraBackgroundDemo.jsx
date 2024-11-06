import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "../Components/ui/aurora-background";
import { SparklesCore } from "../Components/ui/sparkles"; // Ensure this import path is correct

export function AuroraBackgroundDemo() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click
  const handleGetStartedClick = () => {
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      navigate("/Auth"); // Redirect to the Auth route after 3 seconds
    }, 3000); // Adjust the delay as needed
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Aceternity
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
   
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
   
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
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