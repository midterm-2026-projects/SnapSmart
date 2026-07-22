import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import qrCode from "../assets/qr.png";

import packages from "../data/packages";
import photographer1 from "../assets/photographer1.png";
import photographer2 from "../assets/photographer2.png";

import "./Booking.css";


const eventTypes = [
  "Wedding",
  "Christening",
  "Birthday",
  "Debut",
  "Corporate Event",
  "Other",
];


const photographers = [
  {
    id: "photographer-1",
    name: "Photographer One",
    style: "Elegant storytelling",
    image: photographer1,
  },
  {
    id: "photographer-2",
    name: "Photographer Two",
    style: "Bright candid coverage",
    image: photographer2,
  },
];


function createClient(label) {
  return {
    label,
    fullName: "",
    contactNumber: "",
  };
}


function Booking() {
  const location = useLocation();

  const initialPackageId = location.state?.packageId ?? packages[0].id;

  const [selectedPackageId, setSelectedPackageId] = useState(initialPackageId);
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [otherEventType, setOtherEventType] = useState("");
  const [venue, setVenue] = useState("");
  const [motif, setMotif] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedPhotographerId, setSelectedPhotographerId] = useState(
    photographers[0].id
  );
  const [clients, setClients] = useState([
    createClient("Client 1"),
    createClient("Client 2"),
  ]);
  const [message, setMessage] = useState("");

  const [showQR, setShowQR] = useState(false);

  const selectedPackage = useMemo(
    () => packages.find((item) => item.id === selectedPackageId) ?? packages[0],
    [selectedPackageId]
  );

  const selectedPhotographer = useMemo(
    () =>
      photographers.find((item) => item.id === selectedPhotographerId) ??
      photographers[0],
    [selectedPhotographerId]
  );

  const clientCount = eventType === "Wedding" ? 2 : 1;
  const clientRoleLabels = useMemo(() => {
  if (eventType === "Wedding") {
    return ["Bride", "Groom"];
  }

  if (eventType === "Christening" || eventType === "Birthday") {
    return ["Celebrant"];
  }

  return Array.from(
    { length: clientCount },
    (_, index) => `Client ${index + 1}`
  );
}, [eventType, clientCount]);
  const venueLabel =
    eventType === "Wedding" || eventType === "Christening"
      ? "Church Venue"
      : "Event Venue";
  const venuePlaceholder =
    eventType === "Wedding" || eventType === "Christening"
      ? "Enter the church venue"
      : "Enter the event venue";

  useEffect(() => {
    setClients((current) => {
      const next = current.slice(0, clientCount);

      while (next.length < clientCount) {
        next.push(createClient(`Client ${next.length + 1}`));
      }

      return next.map((client, index) => ({
        ...client,
        label: clientRoleLabels[index] ?? `Client ${index + 1}`,
      }));
    });
  }, [clientCount, clientRoleLabels, eventType]);

  const handleClientChange = (index, field, value) => {
    const nextValue =
      field === "contactNumber"
        ? value.replace(/\D/g, "").slice(0, 11)
        : value;

    setClients((current) =>
      current.map((client, currentIndex) =>
        currentIndex === index ? { ...client, [field]: nextValue } : client
      )
    );
  };

 const handleSubmit = async (e) => {

    e.preventDefault();


    const hasClientError = clients.some((client) => {

        return (
            !client.fullName.trim() ||
            !client.contactNumber.trim()
        );

    });



    if (

        !selectedPackageId ||
        !eventType ||
        (eventType === "Other" && !otherEventType.trim()) ||
        !eventDate ||
        !eventTime ||
        !venue.trim() ||
        !motif.trim() ||
        !selectedPhotographerId ||
        hasClientError

    ) {


        Swal.fire({

            title:"Incomplete Details",

            text:
            "Please complete all booking fields before continuing.",

            icon:"warning",

            confirmButtonColor:"#2563eb"

        });


        return;

    }




    const result = await Swal.fire({


        title:"Confirm Booking?",


        html:`

            <p>
                Package:
                <strong>${selectedPackage.name}</strong>
            </p>

            <p>
                Photographer:
                <strong>${selectedPhotographer.name}</strong>
            </p>

            <p>
                Scan QR code to finalize your booking.
            </p>

        `,


        icon:"question",


        showCancelButton:true,


        confirmButtonText:"Continue",


        cancelButtonText:"Review Again",


        confirmButtonColor:"#2563eb"


    });



    if(result.isConfirmed){


        setShowQR(true);


    }


};


  const effectiveEventType =
    eventType === "Other" && otherEventType.trim()
      ? otherEventType.trim()
      : eventType;

  return (
    <div className="booking-page">

      <main className="booking-shell">
        <section className="booking-layout">
          <form className="booking-form-panel" onSubmit={handleSubmit}>
            <div className="booking-header">
              <p className="eyebrow">Booking</p>
              <h1>Secure your package and event details.</h1>
              <p>
                Fill in the booking form below. For weddings, two clients are
                required. For christenings and birthdays, the celebrant is required.
              </p>
            </div>

            {eventType === "Other" && (
              <div className="booking-grid single-col">
                <label>
                  Specify Event Type
                  <input
                    type="text"
                    placeholder="What type of event is this?"
                    value={otherEventType}
                    onChange={(e) => setOtherEventType(e.target.value)}
                  />
                </label>
              </div>
            )}

            <div className="booking-grid two-cols">
              <label>
                Package
                <select
                  value={selectedPackageId}
                  onChange={(e) => setSelectedPackageId(e.target.value)}
                >
                  {packages.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name} - {item.subtitle}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Event Type
                <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="booking-grid two-cols">
              <label>
                Event Date
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </label>

              <label>
                Event Time
                <input
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                />
              </label>
            </div>

            <div className="booking-grid two-cols">
              <label>
                {venueLabel}
                <input
                  type="text"
                  placeholder={venuePlaceholder}
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                />
              </label>

              <label>
                Motif / Theme
                <input
                  type="text"
                  placeholder="Example: White and Gold"
                  value={motif}
                  onChange={(e) => setMotif(e.target.value)}
                />
              </label>
            </div>

            <section className="photographer-section">
              <div className="section-title-row">
                <div>
                  <p className="section-kicker">Photographer</p>
                  <h2>Choose your photographer</h2>
                </div>
                <p>Pick the photographer you want for your event.</p>
              </div>

              <div className="photographer-grid">
                {photographers.map((photographer) => (
                  <button
                    key={photographer.id}
                    type="button"
                    className={`photographer-card ${
                      selectedPhotographerId === photographer.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedPhotographerId(photographer.id)}
                  >
                    <img
                      className={
                        photographer.id === "photographer-2"
                          ? "photographer-image photographer-image--two"
                          : "photographer-image"
                      }
                      src={photographer.image}
                      alt={photographer.name}
                    />
                    <div className="photographer-copy">
                      <strong>{photographer.name}</strong>
                      <span>{photographer.style}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <div className="client-stack">
              {clients.map((client, index) => (
                <section className="client-card" key={client.label}>
                  <div className="client-card-header">
                    <h2>{client.label}</h2>
                    <span>
                      {eventType === "Wedding"
                        ? index === 0
                          ? "Bride details"
                          : "Groom details"
                        : eventType === "Christening" || eventType === "Birthday"
                          ? "Celebrant details"
                        : "Required client details"}
                    </span>
                  </div>

                  <label>
                    {client.label} Name
                    <input
                      type="text"
                      placeholder={`Enter ${client.label.toLowerCase()} name`}
                      value={client.fullName}
                      onChange={(e) =>
                        handleClientChange(index, "fullName", e.target.value)
                      }
                    />
                  </label>

                  <label>
                    Contact Number
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength="11"
                      placeholder="09XXXXXXXXX"
                      value={client.contactNumber}
                      onChange={(e) =>
                        handleClientChange(index, "contactNumber", e.target.value)
                      }
                    />
                  </label>
                </section>
              ))}
            </div>

            <label>
              Notes
              <textarea
                rows="4"
                placeholder="Tell us anything important about the event"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>

            {message && <p className="booking-message">{message}</p>}

            <div className="booking-actions">
              <Link to="/packages" className="secondary-action">
                Back to Packages
              </Link>

              <button type="submit" className="primary-action">
                Confirm Booking
              </button>
            </div>
          </form>

          <aside className="deliverables-panel">
            <p className="eyebrow">Deliverable Preview</p>
            <h2>{selectedPackage.name}</h2>
            <p className="deliverables-subtitle">
              {selectedPackage.subtitle} · {selectedPackage.price}
            </p>

            <div
              className="preview-card"
              style={{ "--accent": selectedPackage.accent }}
            >
              <span>{selectedPackage.theme}</span>
              <strong>{selectedPackage.description}</strong>
            </div>

            <div className="photographer-preview">
              <p className="preview-label">Selected Photographer</p>
              <div className="photographer-preview-card">
                <img
                  className={
                    selectedPhotographer.id === "photographer-2"
                      ? "photographer-image photographer-image--two"
                      : "photographer-image"
                  }
                  src={selectedPhotographer.image}
                  alt={selectedPhotographer.name}
                />
                <div>
                  <strong>{selectedPhotographer.name}</strong>
                  <span>{selectedPhotographer.style}</span>
                </div>
              </div>
            </div>

            <ul className="deliverables-list">
              {selectedPackage.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </aside>
        </section>
      </main>




    </div>

  );

}

export default Booking;