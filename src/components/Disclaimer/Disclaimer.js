import React, { useEffect } from "react";

export default function Disclaimer() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="17f83689-06ba-4eb1-ba60-1593e27a4d11"></div>
    </div>
  );
}
