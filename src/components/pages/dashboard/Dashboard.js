import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import DashboardChart from "./DashboardChart";

export const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="card-container">
        <Card className="mini-card bg-success text-light">
          <Card.Body>
            <div className="card-inner">
              {" "}
              <Card.Title>Category</Card.Title>
              <BiCategory className="fs-3" />
            </div>
            <Card.Text>
              {" "}
              <h3> 30 </h3>
            </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="mini-card bg-primary text-light">
          <Card.Body>
            <div className="card-inner">
              <Card.Title> Product </Card.Title>
              <MdProductionQuantityLimits className="fs-3" />
            </div>
            <Card.Text>
              {" "}
              <h3>500</h3>{" "}
            </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="mini-card bg-danger text-light">
          <Card.Body>
            <div className="card-inner">
              {" "}
              <Card.Title>Customer</Card.Title>
              <AiOutlineUsergroupAdd className="fs-3" />
            </div>
            <Card.Text>
              {" "}
              <h3>80</h3>{" "}
            </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
        <Card className="mini-card bg-warning text-light">
          <Card.Body>
            <div className="card-inner">
              <Card.Title> Reviews </Card.Title>
              <MdOutlineReviews className="fs-3" />
            </div>
            <Card.Text>
              {" "}
              <h3>200</h3>{" "}
            </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>

      <DashboardChart />
    </AdminLayout>
  );
};

export default Dashboard;
