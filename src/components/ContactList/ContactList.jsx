import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.container}>
      {loading && <span>Loading contacts ...</span>}
      {error ? (
        <span>Server is dead</span>
      ) : (
        contacts.map(({ name, number, id }) => (
          <div className={s.contact} key={id}>
            <Contact name={name} number={number} id={id} />
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
