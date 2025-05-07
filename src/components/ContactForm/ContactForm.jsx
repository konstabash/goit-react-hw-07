import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
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
            <label>Name</label>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.fieldCont}>
            <label>Number</label>
            <Field className={s.input} type="text" name="number" />
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
