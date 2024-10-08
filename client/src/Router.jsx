import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import {
  Dashboard,
  Team,
  Invoices,
  Contacts,
  Form,
  Bar,
  Line,
  Pie,
  FAQ,
  Geography,
  Calendar,
  Stream,
} from "./scenes";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

const AppRouter = () => {
  const user = localStorage.getItem('token'); // Check if user is logged in

  return (
    <Router>
      <Routes>
        {/* Unprotected routes */}
        <Route path="/" element={<App />}>
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </>
          )}
          
          {/* Protected routes */}
          {user && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/stream" element={<Stream />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </>
          )}
          
          {/* Redirect any unknown path */}
          <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
