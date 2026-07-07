function DebutPackageCard({ onSelect }) {
  const packageData = {
    name: "Debut Package",
    price: "₱12,000",
    description: "Complete Debut Coverage",
  };

  return (
    <div className="package-card">
      <h3>{packageData.name}</h3>

      <p>
        <strong>Price:</strong> {packageData.price}
      </p>

      <p>
        <strong>Description:</strong> {packageData.description}
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

export default DebutPackageCard;