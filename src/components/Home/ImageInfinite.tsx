import LoadingSpinner from "@/Layout/LoadingSpinner";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Suspense } from "react";

export function InfiniteMovingCardsDemo() {
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

  return (
    <div className="h-[23rem]  rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </Suspense>
    </div>
  );
}

export default InfiniteMovingCardsDemo;
