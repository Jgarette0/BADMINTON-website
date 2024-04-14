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
    image: "./img/img1.jpg",
  },
  {
    image: "./img/img2.jpg",
  },
  {
    image: "./img/img3.jpg",
  },
  {
    image: "./img/img4.jpg",
  },
  {
    image: "./img/img5.jpg",
  },
];

export default InfiniteMovingCardsDemo;
