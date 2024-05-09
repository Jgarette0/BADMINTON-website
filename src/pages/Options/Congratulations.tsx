import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Congrats } from "@/Layout/Congrats";

export default function Congratulations() {
  const [count, setCount] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isComplete) {
      intervalId = setInterval(() => {
        setCount((currentCount) => {
          if (currentCount > 0) {
            return currentCount - 1;
          } else {
            setIsComplete(true);
            return 0;
          }
        });
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isComplete]);

  return (
    <div className="App">
      {isComplete && <Congrats />}
      <AnimatePresence>
        {count > 0 && (
          <motion.h2
            key={count}
            exit={{ opacity: 0, y: 20, position: "absolute" }}
            initial={{ opacity: 0, y: -20, position: "absolute" }}
            animate={{ opacity: 1, y: 0, position: "relative" }}
            className="text-9xl flex flex-col place-items-center justify-center w-screen h-screen font-extrabold"
          >
            {count}
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
}
