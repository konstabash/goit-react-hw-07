import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.container}>
      {loading && <span>Loading contacts ...</span>}
      {error ? (
        <span>Server is dead</span>
      ) : (
        filteredContacts.map(({ name, number, id }) => (
          <div className={s.contact} key={id}>
            <Contact name={name} number={number} id={id} />
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
