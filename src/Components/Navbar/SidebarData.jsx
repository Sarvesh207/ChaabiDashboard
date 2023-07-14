import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RxIcons from "react-icons/rx";
import * as RiIcons  from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <RxIcons.RxDashboard />,
    cName: "nav-text",
  },
  {
    title: "Training",
    path: "/reports",
    icon: <RiIcons.RiGamepadFill />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/products",
    icon: <FaIcons.FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Analytics",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "MyAccount",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
