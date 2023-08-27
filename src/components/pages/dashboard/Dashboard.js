import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminInfo);

  return (
    <AdminLayout title="Dashboard">
      <div className="card d-flex gap-4 p-3 m-5">
        <Card className="bg-success text-light">
          <Card.Body>
            <Card.Title>{admin.fName}</Card.Title>
            <Card.Text>Welcome to DashBoard </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="bg-primary text-light">
          <Card.Body>
            <Card.Title> uuuuu </Card.Title>
            <Card.Text>Books Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>

        <Card className="bg-danger text-light">
          <Card.Body>
            <Card.Title>hhhh</Card.Title>
            <Card.Text>Borrowed Books Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
        <Card className="bg-warning text-light">
          <Card.Body>
            <Card.Title> tyyui </Card.Title>
            <Card.Text>Reviews Found </Card.Text>
            <Card.Footer>
              <Button>More Info</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
