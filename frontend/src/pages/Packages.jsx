import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import packagesFallback from "../data/packages";
import { getPackages } from "../services/packageService";

import "./Packages.css";

function Packages() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function loadPackages() {
      try {
        const apiData = await getPackages();

        // Kung walang data ang API, gamitin ang fallback
        if (!Array.isArray(apiData) || apiData.length === 0) {
          setPackages(packagesFallback);
          return;
        }

        const livePackages = apiData.map((item) => ({
          id: item.id,
          name: item.package_name,
          subtitle: item.subtitle,
          price: `₱${Number(item.price).toLocaleString()}`,
          image: item.image_url,
          accent: item.accent,
        }));

        setPackages(livePackages);
      } catch (error) {
        console.log("Using fallback packages:", error);
        setPackages(packagesFallback);
      }
    }

    loadPackages();
  }, []);

  return (
    <div className="packages-page">

      <main className="packages-shell">
        <section className="packages-grid">
          {packages.map((item) => (
            <div key={item.id} className="package-tile">
              <div className="package-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    // Kapag sira ang image galing API, huwag ipakita
                    e.target.style.display = "none";
                  }}
                />

                <div className="package-overlay">
                  <button
                    className="book-package-button"
                   onClick={() => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    navigate("/booking", {
      state: { packageId: item.id },
    });
  } else {
    navigate("/login", {
      state: {
        redirectTo: "/booking",
        packageId: item.id,
      },
    });
  }
}}
                    
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

    </div>
  );
}

export default Packages;