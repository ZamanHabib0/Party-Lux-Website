import React from "react";
import Counter from "../../components/counter/Counter";

export default function HeroTwo() {
  return (
    <>
      <section
        className="hero-section pt-100 background-img"
        style={{
          background:
            "url('assets/img/hero-bg-1.jpg')no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="hero-content-left text-white mt-5">
                {/* <span className="text-uppercase h6">
                  Customer First Priority
                </span> */}
                <h1 className="text-white">
                  <span>Unlock</span> All The Party Secrets
                </h1>
                <p className="lead">
                  Get Access To The Best Clubs, Bars and House Parties Nearby
                </p>

                {/* <a href="#download" className="btn app-store-btn">
                  Download Now
                </a> */}
                <div className="download-btn mt-5">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.partylux.dev"
                    target='_blank'
                    rel='noopener noreferrer'
                    className="btn google-play-btn mr-3"
                  >
                    <span className="ti-android"></span> Google Play
                  </a>

                  <a
                    href="https://apps.apple.com/pk/app/party-lux/id6449225803"
                    target='_blank'
                    rel='noopener noreferrer'
                    className="btn app-store-btn"
                  >
                    <span className="ti-apple"></span> App Store
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="hero-animation-img">
                <img
                  src="assets/img/image-14.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </section>
    </>
  );
}
