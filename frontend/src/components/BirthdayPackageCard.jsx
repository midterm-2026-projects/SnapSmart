function BirthdayPackageCard({ onSelect }) {
  const packageData = {
    name: "Birthday Package",
    price: "₱10,000",
    description: "Birthday Event Coverage",
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

export default BirthdayPackageCard;