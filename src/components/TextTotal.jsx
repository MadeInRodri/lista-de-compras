import React from "react";

export default function TextTotal({ total }) {
  return (
    <h3 className="absolute bottom-10 left-5  text-emerald-400 text-2xl rounded-4xl z-20 p-1 bg-gray-800/10">
      Total: {total.toFixed(2)}$
    </h3>
  );
}
