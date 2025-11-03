import React from "react";

export default function Button({ label, onClick, type = "button", color = "indigo" }) {
  const colorClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-700",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-white rounded-lg font-medium transition-all ${colorClasses[color]} shadow-sm`}
    >
      {label}
    </button>
  );
}
