import React from "react";

export default function Counter({ className }) {
  return (
    <>
      <div className={`counter ${className}`}>
        <div className="container">
          <div className="row ">
            <ul className="list-inline counter-wrap">
            <li className=" list-inline-item">
                <div className="single-counter text-center">
                  <span>22145</span>
                  <h6>App Download</h6>
                </div>
              </li>
              <li className="  list-inline-item">
                <div className="single-counter text-center">
                  <span>2345</span>
                  <h6>Active Memberships</h6>
                </div>
              </li>
              <li className=" list-inline-item">
                <div className="single-counter text-center">
                  <span>2245</span>
                  <h6>Partners</h6>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
