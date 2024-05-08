import LoadingSpinner from "@/Layout/LoadingSpinner";
import InfiniteMovingCards from "@/components/ui/infinite-moving-img";
import { Suspense } from "react";

export function CongratsImg() {
  const testimonials = [
    {
      image: "./img/img2.jpg",
    },
    {
      image: "./img/cvraa2.jpg",
    },
    {
      image: "./img/cvraa1.jpg",
    },
    {
      image: "./img/cvraa2.jpg",
    },
    {
      image: "./img/img5.jpg",
    },
    {
      image: "./img/cvraa3.jpg",
    },
    {
      image: "./img/cvraa4.jpg",
    },
  ];

  return (
    <div className="h-[20rem]  rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </Suspense>
    </div>
  );
}

export default CongratsImg;
