// Card.jsx
import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white rounded-md shadow p-6 border-4 border-deepSapphire-light ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
