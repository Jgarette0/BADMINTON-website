import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

export default function CarouselDocs() {
  return (
    <Carousel className="md:w-full w-full flex place-items-center justify-center h-full mt-44 ">
      <CarouselContent className="w-screen">
        <Link to="/home">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Home
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/gallery">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Gallery
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/about">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              About
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/program">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Program
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/location">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Location
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/payment">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Payment
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/settings">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Settings
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/support">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Support
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/faq">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              FAQs
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/team">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Team
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/contact">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Contact
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/terms">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Terms
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/docs">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Docs
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/signin">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Sign In
            </Button>
          </CarouselItem>
        </Link>
        <Link to="/signup">
          <CarouselItem>
            <Button
              variant="outline"
              className="h-60 md:h-80 font-dahlia md:text-10xl text-6xl tracking-tight text-center"
            >
              Sign Up
            </Button>
          </CarouselItem>
        </Link>
      </CarouselContent>
      <CarouselPrevious className="absolute bottom-12 scale-150 left-8" />
      <CarouselNext className="absolute bottom-12 scale-150 right-8" />
    </Carousel>
  );
}
