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
      <div className="mt-16 a">
        <div className=" text-light text-7xl scale-90 md:text-10xl leading-none md:tracking-wide transition-all ease-in-out md:hover:scale-105 inline-block transform  md:hover:-skew-y-6 -skew-y-6 md:-skew-y-0 md:hover:bg-gold rounded-full md:py-0 hover:-skew-y-0 font-dahlia sm:text-center">
          {renderWords()}
          <div className="text-xl md:w-1k tracking-tighter font-semibold opacity-80 font-sans"></div>
        </div>
      </div>
    </div>
  );
};
export default TextGenerateEffect;
