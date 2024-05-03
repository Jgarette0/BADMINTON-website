import { HoverEffect } from "../ui/gallery-hover-effect";

export function GalleryImages() {
  return (
    <div className="w-full mx-auto md:px-8">
      <HoverEffect items={images} />
    </div>
  );
}
export const images = [
  {
    img: "img/01.jpg",
    link: "",
  },
  {
    img: "img/03.jpg",
    link: "",
  },
  {
    img: "img/07.jpg",
    link: "",
  },
  {
    img: "img/08.jpg",
    link: "",
  },
  {
    img: "img/09.jpg",
    link: "",
  },
  {
    img: "img/c1.jpg",
    link: "",
  },
  {
    img: "img/c2.jpg",
    link: "",
  },
  {
    img: "img/c3.jpg",
    link: "",
  },
  {
    img: "img/04.jpg",
    link: "",
  },
  {
    img: "img/06.jpg",
    link: "",
  },
  {
    img: "img/tr3.jpg",
    link: "",
  },
  {
    img: "img/tr2.jpg",
    link: "",
  },
];
export default GalleryImages;
