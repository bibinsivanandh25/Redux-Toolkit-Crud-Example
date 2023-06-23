import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectedContact } from "../store/contactSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const contact = useSelector((state) => state.contact.contacts);
  const dispatch = useDispatch();
  console.log(contact);

  return (
    <Fragment>
      <section className="d-flex flex-column align-items-center justify-content-center">
        <div className="p-2 d-flex flex-column align-items-center">
          <h1>Contact List</h1>
          <div className="titleBorder"></div>
        </div>
        <div className="p-2">
          {contact && contact.length > 0 ? (
            contact.map((item) => (
              <div
                key={item.id}
                className="container mb-2"
                onClick={() => dispatch(selectedContact(item.id))}
              >
                <div className="row d-flex align-items-center justify-content-center border border-black rounded px-5 py-3 mb-3 shadow-md">
                  <Link
                    to={`/contact/${item.id}`}
                    className="col-4 text-black text-decoration-none"
                  >
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "12px",
                      }}
                      src={item.image}
                      alt="avatar"
                    />
                  </Link>
                  <Link
                    to={`/contact/${item.id}`}
                    className="col-5 text-black text-decoration-none"
                  >
                    <p className="mb-0">Name: {item.name}</p>
                    <p className="mb-0">Email: {item.email}</p>
                  </Link>
                  <div className="col-3">
                    <Link
                      to={`/edit/${item.id}`}
                      className="text-decoration-none text-black"
                    >
                      <button
                        onClick={() => dispatch(selectedContact(item.id))}
                        className="me-2 px-1 py-1 border rounded-sm mb-2 w-30 btn btn-lg btn-custom"
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => dispatch(deleteContact(item.id))}
                      className="px-2 py-2 border rounded-sm btn btn-lg btn-custom"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="fs-5 p-3">No Contacts Found!</p>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
