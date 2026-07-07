import { useState } from "react";

function PackageBooking({ onNext }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
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
      description: "Complete Debut Coverage",
    },
    {
      id: 4,
      name: "Baptism Package",
      price: "₱8,000",
      description: "Baptism Event Coverage",
    },
  ];

  const handleContinue = () => {
    if (!selectedPackage) {
      setMessage("Please select a package.");
      return;
    }

    setMessage("Package selected successfully!");

    if (onNext) {
      onNext(selectedPackage);
    }
  };

  return (
    <div>
      <h2>Package Booking</h2>

      {packages.map((pkg) => (
        <div key={pkg.id}>
          <h3>{pkg.name}</h3>

          <p>
            <strong>Price:</strong> {pkg.price}
          </p>

          <p>
            <strong>Description:</strong> {pkg.description}
          </p>

          <button
            type="button"
            onClick={() => {
              setSelectedPackage(pkg);
              setMessage("");
            }}
          >
            Select Package
          </button>

          <hr />
        </div>
      ))}

      <button
        type="button"
        onClick={handleContinue}
      >
        Continue
      </button>

      {selectedPackage && (
        <p>
          <strong>Selected Package:</strong>{" "}
          {selectedPackage.name}
        </p>
      )}

      {message && (
        <p>
          {message}
        </p>
      )}
    </div>
  );
}

export default PackageBooking;