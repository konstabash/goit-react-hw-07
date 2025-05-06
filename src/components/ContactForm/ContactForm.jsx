import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = nanoid();
  const numberFiledId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <div className={s.fieldCont}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.fieldCont}>
            <label htmlFor={numberFiledId}>Number</label>
            <Field
              className={s.input}
              type="text"
              name="number"
              id={numberFiledId}
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>
          <button className={s.btn} type="submit">
            Add contact{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
