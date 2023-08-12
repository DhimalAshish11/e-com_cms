import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";
import { useDispatch } from "react-redux";
import { postNewProductAction } from "./ProductAction";
import { Link, useParams } from "react-router-dom";
import SelectCategory from "../../categories/SelectCategory";
import { getNewProduct } from "../../../helper/axios";
const initialState = {
  status: "inactive",
};

const EditProduct = () => {
  const { _id } = useParams();

  const [form, setForm] = useState(initialState);
  const [imgs, setImgs] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // (async () => {
    //   const { products } = await getProducts(_id);
    //   products?._id && setForm(products);
    // })();

    getSelectedProduct();
  }, []);

  const getSelectedProduct = async () => {
    const { products } = await getNewProduct(_id);
    products?._id && setForm(products);
  };

  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung TV",
      required: true,
    },

    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "SAM- TV",
      required: true,
    },

    {
      name: "qty",
      label: "QTY",
      type: "number",
      placeholder: "quantity",
      required: true,
    },

    {
      name: "price",
      label: "PRICE",
      type: "number",
      placeholder: "10000",
      required: true,
    },

    {
      name: "salesPrice",
      label: "Sales Price",
      type: "text",
      placeholder: "8000",
    },

    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
    },

    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
    },

    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "product description...",
      rows: "10",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "success") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnAttached = (e) => {
    const { files } = e.target;
    setImgs(files);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formDt = new FormData();

    for (let key in form) {
      formDt.append(key, form[key]);
    }

    if (imgs.length) {
      [...imgs].forEach((item) => {
        formDt.append("images", item);
      });
    }

    dispatch(postNewProductAction(formDt));
  };

  return (
    <AdminLayout title="Edit Product">
      <Link to="/product">
        <Button variant="secondary">Back</Button>
      </Link>
      <div>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              name="status"
              type="switch"
              label="Status"
              onChange={handleOnChange}
              checked={form.status === "active"}
            />
          </Form.Group>

          <SelectCategory
            onChange={handleOnChange}
            name="parentCat"
            required={true}
            _id={form.parentCat}
          />

          {inputs?.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="py-5 ">
            {form.images?.map((url) => (
              <img
                className="img-thumbnail"
                key={url}
                src={process.env.REACT_APP_ROOTSERVER + url?.slice(6)}
                alt=""
                width="150px"
              />
            ))}
          </div>

          <Form.Group className="mb-3 mt-3">
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnAttached}
              required
            ></Form.Control>
          </Form.Group>
          <div className="d-grid mt-3 mb-3">
            <Button variant="success" type="submit">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
