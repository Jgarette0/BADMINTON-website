"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[23rem]  rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "./img/01.jpg",
  },
  {
    image: "./img/09.jpg",
  },
  {
    image: "./img/08.jpg",
  },
  {
    image: "./img/07.jpg",
  },
  {
    image: "./img/03.jpg",
  },
  {
    image: "./img/10.jpg",
  },
];

export default InfiniteMovingCardsDemo;
