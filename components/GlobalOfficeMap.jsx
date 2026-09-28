"use client";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid, geoMercator } from "d3-geo";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Only the two offices we want to highlight
const offices = [
  {
    id: "india",
    name: "Inchbrick India",
    country: "India",
    coordinates: [78.9629, 20.5937],
    address: "New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=900",
  },
  {
    id: "dubai",
    name: "Inchbrick Dubai",
    country: "United Arab Emirates",
    coordinates: [55.2708, 25.2048],
    address: "Dubai, United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900",
  },
];

export default function GlobalOfficeMap() {
  const [activeOffice, setActiveOffice] = useState(null);

  return (
    <section className="office-map-section">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 200, center: [0, 0] }}
        className="world-map"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const isIndia = geo.properties.NAME === "India";
              const isUae = geo.properties.NAME === "United Arab Emirates";
              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    className={
                      isIndia || isUae ? "country highlight" : "country"
                    }
                  />
                  <text
                    className="country-label"
                    transform={`translate(${centroid[0]},${centroid[1]})`}
                    textAnchor="middle"
                    fontSize={4}
                  >
                    {geo.properties.NAME}
                  </text>
                </g>
              );
            })
          }
        </Geographies>

        {/* Markers for the two highlighted offices */}
        {offices.map((office) => (
          <Marker
            key={office.id}
            coordinates={office.coordinates}
            onClick={() => setActiveOffice(office)}
            className="office-marker"
          >
            <circle r={7} className="marker-dot" />
            <text
              textAnchor="middle"
              y={-12}
              className="marker-label"
            >
              {office.country}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Card that appears when a marker is clicked */}
      {activeOffice && (
        <div
          className="office-card"
          style={
            activeOffice.id === "india"
              ? { left: "20px", right: "auto" }
              : { right: "20px", left: "auto" }
          }
        >
          <button
            className="close-card"
            onClick={() => setActiveOffice(null)}
          >
            ×
          </button>
          <div className="office-image">
            <img src={activeOffice.image} alt={activeOffice.name} />
          </div>
          <div className="office-content">
            <h3>{activeOffice.name}</h3>
            <p className="office-address">{activeOffice.address}</p>
          </div>
        </div>
      )}
    </section>
  );
}
