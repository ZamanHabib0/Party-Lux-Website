import React, { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.termly.io/embed-policy.min.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);  return (
        <div className="container">
         <div name="termly-embed" data-id="4a13c42d-d575-4f4a-8965-ce757b94e846"></div>
        </div>
      );
}
