import { useState } from "react";

function PackageSelection({
  selectedPackage,
  setSelectedPackage,
  onNext,
}) {
  const [message, setMessage] = useState("");

  const packages = [
    {
      id: 1,
      name: "Wedding Package",
      price: "₱15,000",
      description: "Complete Wedding Coverage",
    },
    {
      id: 2,
      name: "Birthday Package",
      price: "₱10,000",
      description: "Birthday Event Coverage",
    },
    {
      id: 3,
      name: "Debut Package",
      price: "₱12,000",
      description: "Debut Photography Coverage",
    },
    {
      id: 4,
      name: "Baptism Package",
      price: "₱8,000",
      description: "Baptism Event Coverage",
    },
  ];

  const handleContinue = () => {
    if (!selectedPackage.name) {
      setMessage("Please select a package.");
      return;
    }

    setMessage("Package selected successfully!");

    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div>
      <h2>Package Selection</h2>

      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="package-card"
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{pkg.name}</h3>

          <p>{pkg.price}</p>

          <p>{pkg.description}</p>

          <button
            type="button"
            onClick={() =>
              setSelectedPackage(pkg)
            }
          >
            Select Package
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleContinue}
      >
        Continue
      </button>

      {selectedPackage.name && (
        <h4>
          Selected:
          {" "}
          {selectedPackage.name}
        </h4>
      )}

      {message && (
        <p
          className={
            message.includes("successfully")
              ? "success"
              : "error"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default PackageSelection;