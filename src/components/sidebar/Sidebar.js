import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiContactlessPaymentDuotone } from "react-icons/pi";
export const Sidebar = () => {
  return (
    <div className="side-bar bg-dark text-light p-3">
      <p className="mt-3 text-center">Admin Panel</p>
      <hr />
      <nav>
        <ul className="list-unstyled side-nav">
          <li>
            <Link className="nav-link" to="/dashboard">
              <AiOutlineDashboard className="fs-4" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/category">
              <PiContactlessPaymentDuotone />
              Category
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/product">
              <MdProductionQuantityLimits />
              Product
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/payment-option">
              <PiContactlessPaymentDuotone />
              Payment Option
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/order">
              <PiContactlessPaymentDuotone />
              Order
            </Link>
            <Link className="nav-link" to="/customer">
              <PiContactlessPaymentDuotone />
              Customer
            </Link>
            <Link className="nav-link" to="/admin-User">
              <PiContactlessPaymentDuotone />
              Admin-User
            </Link>
            <hr />
            <Link className="nav-link" to="/profile">
              <PiContactlessPaymentDuotone />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
