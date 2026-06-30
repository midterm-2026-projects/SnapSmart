import ImageGrid from "./ImageGrid";
import GalleryNavigation from "./GalleryNavigation";

function GalleryLayout() {
  return (
    <div>
      <h2>Gallery</h2>

      <GalleryNavigation />

      <ImageGrid />
    </div>
  );
}

export default GalleryLayout;