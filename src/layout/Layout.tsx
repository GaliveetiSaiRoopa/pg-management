import React, { Suspense } from "react";
import Dashboard from "../components/pages/common/Dashboard";
import PGListing from "../components/pages/admin/pg-listing/PGListing";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SidebarLayout from "../components/SidebarLayout";
import Login from "../components/pages/login-pages/Login";


const Layout = () => {
  return (
    <Suspense fallback="It's not your fault, it's our mistake">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <>
                <SidebarLayout module="dashboard">
                  <Dashboard />
                </SidebarLayout>
              </>
            }
          />
          <Route
            path="/admin/pg-management"
            element={
              <SidebarLayout module="pg-mgt">
                <PGListing />
              </SidebarLayout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Layout;
