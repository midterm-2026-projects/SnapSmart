function ImageGrid() {
  const images = [
    {
      id: 1,
      src: "/image1.jpg",
      alt: "Gallery Image 1",
    },
    {
      id: 2,
      src: "/image2.jpg",
      alt: "Gallery Image 2",
    },
    {
      id: 3,
      src: "/image3.jpg",
      alt: "Gallery Image 3",
    },
  ];

  return (
    <div>
      <h2>Gallery</h2>

      <div data-testid="gallery-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            data-testid="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;