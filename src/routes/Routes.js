import React from "react";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "../components/others/ChangePassword";
import ComingSoon from "../components/others/ComingSoon";
import LoginTwo from "../components/others/LoginTwo";
import NotFound from "../components/others/NotFound";
import PasswordReset from "../components/others/PasswordReset";
import HomeTwo from "../themes/index-2/HomeTwo";
import BecomePartner from "../pages/becomePartner";
import MyBusiness from "../pages/MyBusiness.js";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from "./protected";
import PrivacyPolicy from "../pages/privacyPolicy.js";
import TermsAndConditions from "../pages/TermsAndConditions.js";
import EndUserLicenseAgrement from "../pages/EndUserLicenseAgrement.js";
import Disclaimer from "../pages/Disclaimer.js";
import ReturnPolicy from "../pages/ReturnPolicy.js";
import CookiePolicy from "../pages/CookiePolicy.js";
import AcceptableUsePolicy from "../pages/AcceptableUsePolicy.js";
// import Signup from "../components/others/SignupTwo";
import Login from "../pages/Login";
import OTPVerification from  "../pages/otpVerfication.js";
// import SignupPage from "../pages/SignupPage";
// import BlogGrid from "../pages/BlogGrid";
// import BlogWithSidebar from "../pages/BlogWithSidebar";
// import BlogDetails from "../pages/BlogDetails";
// import OurTeam from "../pages/OurTeam";
// import TeamDetails from "../pages/TeamDetails";
// import Download from "../pages/Download";
// import Review from "../pages/Review";
// import Faq from "../pages/Faq";
// import ThankYou from "../components/others/ThankYou";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/become-partner" element={  <ProtectedRoute><BecomePartner /></ProtectedRoute>  } />
        <Route path="/update-business" element={  <ProtectedRoute><BecomePartner /></ProtectedRoute>  } />
        <Route path="/my-business" element={  <ProtectedRoute><MyBusiness /></ProtectedRoute>  } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/end-user-license-agreement" element={<EndUserLicenseAgrement />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        {/* <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-sidebar" element={<BlogWithSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/download" element={<Download />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup-two" element={<SignupTwo />} />
        <Route path="/basic-signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/thank-you" element={<ThankYou />} /> */}



        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
