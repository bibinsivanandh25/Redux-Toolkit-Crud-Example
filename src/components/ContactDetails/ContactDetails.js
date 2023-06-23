import { useSelector } from "react-redux";

const ContactDetails = () => {
  const contacts = useSelector((state) => state.contact.contacts);
  const selectedContactId = useSelector(
    (state) => state.contact.selectedContactId
  );

  const selectedContact = contacts.find(
    (contact) => contact.id === selectedContactId
  );

  if (!selectedContact) {
    return (
      <p className="text-center my-5 fs-3 fw-bold">No contact selected!</p>
    );
  }

  return (
    <main className="d-flex align-items-center justify-content-center mt-5">
      {selectedContact && (
        <div className="border border-black rounded shadow-lg p-4 d-flex align-items-center">
          <img
            style={{ width: "100px", borderRadius: "12px" }}
            src={selectedContact.image}
            alt="images"
          />
          <div className="ms-3 d-flex flex-column">
            <h5>Name: {selectedContact?.name}</h5>
            <p className="mb-0">Email: {selectedContact?.email}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactDetails;
