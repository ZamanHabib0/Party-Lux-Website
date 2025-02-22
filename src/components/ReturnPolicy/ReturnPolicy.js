import React, { useEffect } from "react";

export default function PrivacyPolicy() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="6112758d-9cb2-4999-be46-86d8e71ee8e2"></div>
    </div>
  );
}
