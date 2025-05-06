import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.container}>
      {filteredContacts.map(({ name, number, id }) => (
        <div className={s.contact} key={id}>
          <Contact name={name} number={number} id={id} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
