import React from "react";
import { Routes, Route } from "react-router-dom";
import ChangePassword from "../components/others/ChangePassword";
import ComingSoon from "../components/others/ComingSoon";
import LoginTwo from "../components/others/LoginTwo";
import NotFound from "../components/others/NotFound";
import PasswordReset from "../components/others/PasswordReset";
import ThankYou from "../components/others/ThankYou";
import Login from "../pages/Login";
import HomeTwo from "../themes/index-2/HomeTwo";
import OurTeam from "../pages/OurTeam";
import TeamDetails from "../pages/TeamDetails";
import Download from "../pages/Download";
import Review from "../pages/Review";
import Faq from "../pages/Faq";
import BecomePartner from "../pages/becomePartner";
import SignupTwo from "../components/others/SignupTwo";
import SignupPage from "../pages/SignupPage";
import BlogGrid from "../pages/BlogGrid";
import BlogWithSidebar from "../pages/BlogWithSidebar";
import BlogDetails from "../pages/BlogDetails";
import ScrollToTop from "./ScrollToTop";
import PrivacyPolicy from "../pages/privacyPolicy.js";
import TermsAndConditions from "../pages/TermsAndConditions.js";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-two" element={<LoginTwo />} />
        <Route path="/signup-two" element={<SignupTwo />} />
        <Route path="/basic-signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/download" element={<Download />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/become-partner" element={<BecomePartner />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-sidebar" element={<BlogWithSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
