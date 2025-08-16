"use client";
import LogoSVG from "@/helpers/LogoSVG";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

function AnimatedCleaningSupplies() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-blue-500">
        <div className="w-40 h-40 sm:w-96 sm:h-96 flex items-center justify-center">
          <LogoSVG percentage="80"/>
        </div>
        <div className="flex flex-col md:translate-y-13">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="text-white font-bold tracking-wider text-6xl md:text-8xl"
          >
            DACON
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="text-white font-sans tracking-widest text-3xl md:text-5xl"
          >
            SHINE BRIGHT
          </motion.p>
        </div>
      </div>
      <div className="pt-8">
        <motion.div
          initial={{ opacity: 0, x: 0, y: 10 }}
          animate={{ opacity: 1, x: 0, y: -15 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <Link href="/home">
            <Button
              variant="solid"
              className="bg-white text-blue-500 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Enter Site{" "}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-blue-500">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <AnimatedCleaningSupplies />
        </motion.div>
      </div>
    </div>
  );
}
