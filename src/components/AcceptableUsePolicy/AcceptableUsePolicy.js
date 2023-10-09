import React, { useEffect } from "react";

export default function AcceptableUsePolicy() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="0b2c0462-6902-43df-b65d-b25e54aaf342"></div>
    </div>
  );
}
