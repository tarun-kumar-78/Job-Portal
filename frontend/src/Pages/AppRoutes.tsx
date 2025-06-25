import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import FindJob from "./FindJob";
import FindTalentPage from "./FindTalentPage";
import PostJobPage from "./PostJobPage";
import JobDescriptionPage from "./JobDescriptionPage";
import ApplyJobPage from "./ApplyJobPage";
import TalentProfile from "./TalentProfile";
import CompanyPage from "./CompanyPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import SignupPage from "./SignupPage";
import UserProfile from "../Profile/UserProfile";
import Home from "./Home";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <BrowserRouter>
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJob />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/post-jobs" element={<PostJobPage />} />
          <Route path="/jobs/:id" element={<JobDescriptionPage />} />
          <Route path="/apply-job/:id" element={<ApplyJobPage />} />
          <Route path="/talent-profile/:id" element={<TalentProfile />} />
          <Route path="/company/:id" element={<CompanyPage />} />
          <Route path="/posted-jobs" element={<PostedJobPage />} />
          <Route path="/job-history" element={<JobHistoryPage />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <SignupPage />}
          />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
