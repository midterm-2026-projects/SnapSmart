import { useState } from "react";

function ClientInformation({
  client,
  setClient,
  errors,
  setErrors,
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const newErrors = {};

    if (!client.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!client.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!client.contactNumber.trim()) {
      newErrors.contactNumber =
        "Contact Number is required";
    }

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));

    const allEmpty =
      !client.fullName.trim() &&
      !client.email.trim() &&
      !client.contactNumber.trim();

    const allComplete =
      client.fullName.trim() &&
      client.email.trim() &&
      client.contactNumber.trim();

    if (allEmpty) {
      setMessage(
        "Please complete all Client Information fields."
      );
      return;
    }

    if (!allComplete) {
      setMessage(
        "Please complete the missing Client Information fields."
      );
      return;
    }

    setMessage(
      "Client Information Submitted Successfully!"
    );
  };

  return (
    <div>
      <h3>Client Information</h3>

      <div className="field-group">
        <input
          type="text"
          placeholder="Full Name"
          value={client.fullName}
          onChange={(e) => {
            const value = e.target.value;

            setClient({
              ...client,
              fullName: value,
            });

            if (value.trim()) {
              setErrors((prev) => ({
                ...prev,
                fullName: "",
              }));
            }
          }}
        />

        {errors.fullName && (
          <p className="error">
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="field-group">
        <input
          type="email"
          placeholder="Email"
          value={client.email}
          onChange={(e) => {
            const value = e.target.value;

            setClient({
              ...client,
              email: value,
            });

            if (value.trim()) {
              setErrors((prev) => ({
                ...prev,
                email: "",
              }));
            }
          }}
        />

        {errors.email && (
          <p className="error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field-group">
        <input
          type="text"
          placeholder="Contact Number"
          value={client.contactNumber}
          onChange={(e) => {
            const value = e.target.value;

            setClient({
              ...client,
              contactNumber: value,
            });

            if (value.trim()) {
              setErrors((prev) => ({
                ...prev,
                contactNumber: "",
              }));
            }
          }}
        />

        {errors.contactNumber && (
          <p className="error">
            {errors.contactNumber}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit Client Information
      </button>

      {message && (
        <p
          className={
            message.includes("Successfully")
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

export default ClientInformation;