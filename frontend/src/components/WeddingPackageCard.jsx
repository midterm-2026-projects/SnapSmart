function WeddingPackageCard({ onSelect }) {
  const packageData = {
    name: "Wedding Package",
    price: "₱15,000",
    description: "Complete Wedding Coverage",
  };

  return (
    <div className="package-card">
      <h3>{packageData.name}</h3>

      <p>
        <strong>Price:</strong> {packageData.price}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {packageData.description}
      </p>

      <button
        type="button"
        onClick={() => onSelect(packageData)}
      >
        Select Package
      </button>
    </div>
  );
}

export default WeddingPackageCard;