import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `AB BADMINTON TRAINING CAMP`;

export function TextGenerateEffectDemo() {
  return (
    <div className=" text-3xl md:w-1k md:h-auto flex flex-col text-left place-items-center h-96 justify-center opacity-80 hover:opacity-100 select-none md:text-center md:pt-16 md:pb-0 ">
      <TextGenerateEffect words={words} />
    </div>
  );
}
export default TextGenerateEffectDemo;
