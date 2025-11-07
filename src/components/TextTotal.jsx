import React from "react";

export default function TextTotal({ total }) {
  return (
    <h3 className=" text-center text-white text-2xl">
      Total: {total.toFixed(2)}$
    </h3>
  );
}
