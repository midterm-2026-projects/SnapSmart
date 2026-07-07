function GalleryNavigation({
  onPrevious = () => {},
  onNext = () => {},
}) {
  
  return (
    <nav>
      <button
        type="button"
        onClick={onPrevious}
      >
        Previous
      </button>

      <button
        type="button"
        onClick={onNext}
      >
        Next
      </button>
    </nav>
  );
}

export default GalleryNavigation;