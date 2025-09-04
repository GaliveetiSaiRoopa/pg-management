import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarLayout = ({ children }: any) => {
  const navigate = useNavigate();
  const modules = [
    {
      name: "Dashboard",
      icon: "/icons/dashboard.svg",
      slug: "dashboard",
      link: "/dashboard",
    },
    {
      name: "PG Management",
      icon: "/icons/pgmanagement.svg",
      slug: "pg-mgt",
      link: "/admin/pg-management",
    },
    {
      name: "Tenant Management",
      icon: "/icons/tenants.svg",
      slug: "tenant-mgt",
      link: "/admin/tenant-management",
    },
    {
      name: "Staff Management",
      icon: "/icons/staff.svg",
      slug: "staff-mgt",
      link: "/admin/staff-management",
    },
    {
      name: "Rents and Payments",
      icon: "/icons/payments.svg",
      slug: "payments",
      link: "/admin/payments",
    },
    {
      name: "Complaints",
      icon: "/icons/complaints.svg",
      slug: "complaints",
      link: "/admin/complaints",
    },
    {
      name: "Settings",
      icon: "/icons/settings.svg",
      slug: "settings",
      link: "/admin/settings",
    },
  ];

  const [selectedModule, setSelectedModule] = useState("Dashboard");

  return (
    <div className="flex">
      <div className="lg:w-56 min-h-screen bg-slate-200 flex flex-col gap-6">
        <img src="/icons/logo.svg" alt="logo" className="px-4 py-2" />
        <div className="flex gap-2 flex-col text-base">
          {modules.map((item) => (
            <div
              className={`flex gap-2 font-times cursor-pointer px-4 ${
                selectedModule === item?.name ? "bg-white" : ""
              }`}
              onClick={() => {
                setSelectedModule(item?.name);
                navigate(item?.link);
              }}
            >
              <img src={item?.icon} alt="module-icon" className="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-10 bg-slate-200 flex justify-end px-10 items-center">
          <p>Hello, User</p>
        </div>
        <div className=" min-h-screen bg-white">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
