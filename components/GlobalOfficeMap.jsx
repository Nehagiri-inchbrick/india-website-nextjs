"use client";

import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const offices = [
  {
    id: "dubai",
    company: "Inchbrick Realty",
    name: "Dubai",
    country: "UAE",
    city: "Business Bay",
    label: "Dubai, UAE",
    coordinates: [55.2708, 25.2048],
    address: "Churchill Towers, Business Bay, Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900",
    tone: "navy",
  },
  {
    id: "india",
    company: "Inchbrick Realty",
    name: "India",
    country: "India",
    city: "New Delhi",
    label: "India, New Delhi",
    coordinates: [77.209, 28.6139],
    address: "Dwarka Sector 12, New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900",
    tone: "gold",
  },
];

const nearbyLabels = [
  { id: "usa", name: "USA", coordinates: [-95.7, 37.1] },
  { id: "uk", name: "UK", coordinates: [-1.5, 53] },
  { id: "europe", name: "Europe", coordinates: [10, 50] },
  { id: "africa", name: "Africa", coordinates: [20, 5] },
  { id: "singapore", name: "Singapore", coordinates: [103.8, 1.35] },
  { id: "australia", name: "Australia", coordinates: [133.8, -25.3] },
];

const upcomingLocations = [
  { id: "london", name: "London", note: "Coming soon" },
  { id: "singapore", name: "Singapore", note: "Coming soon" },
  { id: "new-jersey", name: "New Jersey", note: "Coming soon" },
  { id: "toronto", name: "Toronto", note: "Coming soon" },
];

export default function GlobalOfficeMap({ embedded = false }) {
  const [activeId, setActiveId] = useState(null);

  const activeOffice = useMemo(
    () => offices.find((office) => office.id === activeId) || null,
    [activeId]
  );

  const otherLocations = useMemo(() => {
    if (!activeOffice) return [];
    const sibling = offices
      .filter((office) => office.id !== activeOffice.id)
      .map((office) => ({
        id: office.id,
        name: office.label,
        note: "Open now",
        live: true,
      }));
    return [...sibling, ...upcomingLocations];
  }, [activeOffice]);

  function toggleOffice(id) {
    setActiveId((current) => (current === id ? null : id));
  }

  return (
    <section
      className={`office-map-section${embedded ? " office-map-section--embedded" : ""}`}
      aria-labelledby="office-map-title"
    >
      <div className="office-reach-card">
        <header className="office-reach-head">
          <div className="office-reach-head-copy">
            <span className="office-reach-mark" aria-hidden="true" />
            <p className="office-reach-eyebrow">Our global reach</p>
            <h2 id="office-map-title">
              Two Key Locations.
              <span> Global Opportunities.</span>
            </h2>
          </div>
          <aside className="office-reach-note">
            <i className="fas fa-location-dot" aria-hidden="true" />
            <p>We operate in selective locations for better focus and personalized service.</p>
          </aside>
        </header>

        <div className="office-map-stage">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 118, center: [40, 18] }}
            width={980}
            height={420}
            className="world-map"
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = String(
                    geo.properties.NAME ||
                      geo.properties.name ||
                      geo.properties.NAME_EN ||
                      ""
                  );
                  const isIndia = name === "India";
                  const isUae =
                    name === "United Arab Emirates" ||
                    name.includes("Emirates");
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className={
                        isIndia || isUae ? "country highlight" : "country"
                      }
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            <Line
              from={offices[0].coordinates}
              to={offices[1].coordinates}
              stroke="#0f2339"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeDasharray="5 5"
              className="office-flight-line"
            />

            {nearbyLabels.map((place) => (
              <Marker key={place.id} coordinates={place.coordinates}>
                <g className="map-place-label" pointerEvents="none">
                  <circle r={2.2} className="map-place-dot" />
                  <text textAnchor="middle" y={-7} className="map-place-text">
                    {place.name}
                  </text>
                </g>
              </Marker>
            ))}

            {/* Mid-arc plane marker (approx between Dubai & Delhi) */}
            <Marker coordinates={[66, 32]}>
              <g className="office-plane" pointerEvents="none">
                <circle r={8} className="office-plane-halo" />
                <text textAnchor="middle" dy="0.35em" className="office-plane-icon">
                  ✈
                </text>
              </g>
            </Marker>

            {offices.map((office) => {
              const isActive = activeId === office.id;
              return (
                <Marker
                  key={office.id}
                  coordinates={office.coordinates}
                  className={`office-marker office-marker--${office.tone}${
                    isActive ? " is-active" : ""
                  }`}
                >
                  <g
                    role="button"
                    tabIndex={0}
                    aria-label={`${office.name} office`}
                    aria-expanded={isActive}
                    onClick={() => toggleOffice(office.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleOffice(office.id);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r={18} className="marker-glow" />
                    <circle r={7} className="marker-dot" />
                    <path
                      className="marker-pin"
                      d="M0,-18 C-8,-18 -14,-11 -14,-4 C-14,6 0,18 0,18 C0,18 14,6 14,-4 C14,-11 8,-18 0,-18 Z"
                    />
                    <circle r={3.2} className="marker-pin-core" cy={-5} />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>

          <div className="office-pin-cards">
            {offices.map((office) => (
              <button
                key={office.id}
                type="button"
                className={`office-pin-card office-pin-card--${office.id} office-pin-card--${office.tone}${
                  activeId === office.id ? " is-expanded" : ""
                }`}
                aria-expanded={activeId === office.id}
                onClick={() => toggleOffice(office.id)}
              >
                <span className="office-pin-card-media">
                  <img src={office.image} alt="" />
                </span>
                <span className="office-pin-card-body">
                  <strong>{office.name}</strong>
                  <span>
                    {office.id === "india" ? "New Delhi, India" : "UAE"}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="office-compass" aria-hidden="true">
            <i className="fas fa-compass" />
          </div>

          {activeOffice && (
            <aside
              className={`office-card office-card--${activeOffice.id} is-open`}
              aria-live="polite"
            >
              <button
                type="button"
                className="close-card"
                aria-label="Close office details"
                onClick={() => setActiveId(null)}
              >
                ×
              </button>
              <div className="office-image">
                <img src={activeOffice.image} alt={activeOffice.name} />
              </div>
              <div className="office-content">
                <p className="office-company">{activeOffice.company}</p>
                <h3>{activeOffice.label}</h3>
                <p className="office-address">{activeOffice.address}</p>
                <div className="office-other">
                  <p className="office-other-title">Other locations</p>
                  <ul className="office-other-list">
                    {otherLocations.map((loc) => (
                      <li key={loc.id}>
                        <span>{loc.name}</span>
                        <em className={loc.live ? "is-live" : undefined}>
                          {loc.note}
                        </em>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          )}
        </div>

        <footer className="office-reach-foot">
          <div className="office-reach-foot-item">
            <i className="fas fa-globe" aria-hidden="true" />
            <span>Connecting Markets Across Continents.</span>
          </div>
          <div className="office-reach-foot-item">
            <i className="fas fa-shield-halved" aria-hidden="true" />
            <span>Local Expertise. Global Standards.</span>
          </div>
          <div className="office-reach-foot-locs">
            <span className="office-reach-foot-label">Our Locations</span>
            <span className="office-reach-chip office-reach-chip--navy">
              <i className="fas fa-location-dot" aria-hidden="true" /> Dubai, UAE
            </span>
            <span className="office-reach-chip office-reach-chip--gold">
              <i className="fas fa-location-dot" aria-hidden="true" /> India, New Delhi
            </span>
          </div>
          <div className="office-reach-foot-dots" aria-label="Other regions">
            {["USA", "UK", "Europe", "Singapore", "Australia"].map((name) => (
              <span key={name}>
                <i aria-hidden="true" /> {name}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
