import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.ui.loading);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
  });

  const { name, email, image } = formData;

  const [error, setError] = useState({
    name: "",
    email: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errObj = {
      name: "",
      email: "",
      image: "",
    };

    let err = false;

    if (!name) {
      errObj.name = "Name is required!";
      err = true;
    } else if (name.trim().length !== name.length) {
      errObj.name = "Enter a valid name";
    }
    if (!email) {
      errObj.email = "Email is required!";
      err = true;
    } else if (email.trim().length !== email.length) {
      errObj.email = "Enter a valid email";
    }
    if (!image) {
      errObj.image = "Url is required!";
      err = true;
    } else if (image.trim().length !== image.length) {
      errObj.image = "Enter a valid url";
    }

    setError({ ...errObj });
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formError = validateForm();

    if (!formError) {
      dispatch(
        addContact({
          id: crypto.randomUUID().toString(),
          name,
          email,
          image,
        })
      );

      navigate("/");

      setFormData({
        name: "",
        email: "",
        image: "",
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center my-5">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center pb-2">Create Contact List</h2>
        <div
          className="p-4 border border-black shadow-md rounded"
          style={{ width: "400px" }}
        >
          <div className="d-flex flex-column mb-2">
            <label htmlFor="name" className="fs-5">
              Image
            </label>
            <input
              type="url"
              id="image"
              value={image}
              name="image"
              onChange={handleChange}
              className="rounded border-1 p-1"
            />
            {error.image && <p className="text-danger mb-0">{error.image}</p>}
          </div>
          <div className="d-flex flex-column mb-2">
            <label htmlFor="name" className="fs-5">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={handleChange}
              className="rounded border-1 p-1"
            />
            {error.name && <p className="text-danger mb-0">{error.name}</p>}
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="email" className="fs-5">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={handleChange}
              className="rounded border-1 p-1"
            />
            {error.email && <p className="text-danger mb-0">{error.email}</p>}
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              className="px-2 py-1 btn btn-lg border border-black"
              disabled={!error}
            >
              {loading ? "Loading..." : "Create"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
