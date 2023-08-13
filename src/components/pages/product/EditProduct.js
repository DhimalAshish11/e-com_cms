import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";
import { useDispatch } from "react-redux";
import {
  deleteProductAction,
  postNewProductAction,
  updateProductAction,
} from "./ProductAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import SelectCategory from "../../categories/SelectCategory";
import { getNewProduct } from "../../../helper/axios";

const EditProduct = () => {
  const { _id } = useParams();

  const [form, setForm] = useState({});
  const [imgs, setImgs] = useState([]);

  const [imgToDelete, setImgToDelete] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      value: form.name,
    },

    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "SAM- TV",
      required: true,
      value: form.sku,
      disabled: true,
    },

    {
      name: "slug",
      label: "Slug",
      type: "text",

      value: form.slug,
      disabled: true,
    },

    {
      name: "qty",
      label: "QTY",
      type: "number",
      placeholder: "quantity",
      required: true,
      value: form.qty,
    },

    {
      name: "price",
      label: "PRICE",
      type: "number",
      placeholder: "10000",
      required: true,
      value: form.price,
    },

    {
      name: "salesPrice",
      label: "Sales Price",
      type: "text",
      placeholder: "8000",
      value: form.salesPrice,
    },

    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "Date",
      value: form.salesStartDate,
    },

    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "Date",
      value: form.salesEndDate,
    },

    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      placeholder: "product description...",
      rows: "10",
      required: true,
      value: form.description,
    },
  ];

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "thumbnail" && imgToDelete.includes(value)) {
      return alert("Deleting image can't be set as thumbnail");
    }

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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to update this product")) {
      return;
    }

    const formDt = new FormData();

    const { sku, slug, __v, createdAt, updatedAt, ...rest } = form;

    rest.images = rest.images.filter((url) => !imgToDelete.includes(url));

    for (let key in rest) {
      formDt.append(key, rest[key]);
    }

    if (imgs.length) {
      [...imgs].forEach((item) => {
        formDt.append("images", item);
      });
    }

    //removeee: ske, slug, __v, createdAt, updatedAt

    const isUpdated = await dispatch(updateProductAction(formDt));

    isUpdated && getSelectedProduct();
    setImgToDelete([]);
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      let isDeleted = await dispatch(deleteProductAction(_id));

      isDeleted && navigate("/product");
    }
  };

  const handleOnDeleteSelect = (e) => {
    const { value, checked } = e.target;

    if (value === form.thumbnail) {
      return alert(
        "You can't delete the thumbnail, choose another thumbnail first"
      );
    }
    checked
      ? setImgToDelete([...imgToDelete, value])
      : setImgToDelete(imgToDelete.filter((url) => url !== value));
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
              <div>
                <div>
                  <input
                    type="radio"
                    name="thumbnail"
                    checked={url === form.thumbnail}
                    value={url}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="">Thumbnail</label>
                </div>

                <img
                  className="img-thumbnail"
                  key={url}
                  src={process.env.REACT_APP_ROOTSERVER + url?.slice(6)}
                  alt=""
                  width="150px"
                />

                <div>
                  <Form.Check
                    label="Delete"
                    value={url}
                    onChange={handleOnDeleteSelect}
                    checked={imgToDelete.includes(url)}
                  />
                </div>
              </div>
            ))}
          </div>

          <Form.Group className="mb-3 mt-3">
            <Form.Control
              type="file"
              name="img"
              multiple
              onChange={handleOnAttached}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid mt-3 mb-3">
            <Button variant="success" type="submit">
              Update Product
            </Button>
          </div>
          <div className="d-grid mb-3">
            <Button variant="danger" onClick={handleOnDelete}>
              Delete this product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
