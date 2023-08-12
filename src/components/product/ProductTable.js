import React, { useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getNewProductAction,
} from "../pages/product/ProductAction";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);

  useEffect(() => {
    dispatch(getNewProductAction());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div>10 Product found</div>
        <div>
          <Form.Control type="text" placeholder="search by product name" />
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>no img</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>
                <Button variant="warning">Edit</Button>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteProductAction(item._id))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;