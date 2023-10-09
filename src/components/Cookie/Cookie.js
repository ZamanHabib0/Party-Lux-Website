import React, { useEffect } from "react";

export default function Cookie() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);  return (
    <div className="container">
      <div name="termly-embed" data-id="ea3ee5ef-d689-46ae-8632-f31f883507c5"></div>
    </div>
  );
}
