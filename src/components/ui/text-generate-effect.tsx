import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.3),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="text-light opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-16git a">
        <div className=" text-light md:hover:text-black text-6xl scale-95 md:text-9xl leading-none md:tracking-wider transition-all duration-2000ms ease-in-out md:hover:scale-110 inline-block transform  md:hover:-skew-y-6 -skew-y-6 md:-skew-y-0 md:hover:bg-gold rounded-full md:py-4 md:px-12 hover:-skew-y-0">
          {renderWords()}
          <div className="text-xl md:w-1k tracking-tighter font-semibold opacity-65">
            Building champions in life
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextGenerateEffect;
