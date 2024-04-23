import LoadingSpinner from "@/Layout/LoadingSpinner";
import { Suspense, lazy } from "react";

const Footer = lazy(() => import("@/components/Footer/Footer"));
const GalleryHeader = lazy(() => import("@/components/Gallery/GalleryHeader"));
const GalleryImages = lazy(() => import("@/components/Gallery/GalleryImg"));

export const GalleryPage = () => {
  return (
    <>
      <GalleryHeader />
      <Suspense fallback={<LoadingSpinner />}>
        <GalleryImages />
      </Suspense>
      <Footer />
    </>
  );
};

export default GalleryPage;
