import React, { useEffect } from "react";

export default function EndUserLicenseAgrement() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="38d987ae-45d7-438a-8727-ed8a03dd49f5"></div>
    </div>
  );
}
