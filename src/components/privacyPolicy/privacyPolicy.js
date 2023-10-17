import React, { useEffect } from "react";

export default function PrivacyPolicy() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="cb92fa34-7b35-4c4d-ada8-ab9dacedb5da"></div>
    </div>
  );
}
