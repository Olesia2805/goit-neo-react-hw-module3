import Button from '../Button/Button';
import formCss from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoMdPersonAdd } from 'react-icons/io';
import { useId } from 'react';
import * as Yup from 'yup';

const testSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short name!')
    .max(5, 'Too long name!')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^[0-9]+$/gi, 'Must be a Number')
    .min(7, 'Number must be 7 digits long')
    .max(7, 'Number must be 7 digits long')
    .required('Phone is required'),
});

const ContactForm = ({ save }) => {
  const nameId = useId();
  const numId = useId();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newContact = { name, number };
    save(newContact);
    actions.resetForm();
  };

  return (
    <div className={formCss.formWrapper}>
      <div className={formCss.circles}>
        <i
          className={formCss.circle}
          style={{ '--clr': 'var(--gradient-color-first)' }}
        ></i>
        <i
          className={formCss.circle}
          style={{ '--clr': 'var(--gradient-color-second)' }}
        ></i>
        <i
          className={formCss.circle}
          style={{ '--clr': 'var(--gradient-color-fourth)' }}
        ></i>
      </div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={testSchema}
      >
        <Form className={formCss.form}>
          <label htmlFor={nameId}>Name</label>
          <Field
            type="text"
            className={formCss.formInput}
            id={nameId}
            name="name"
            placeholder="Olesia V"
          ></Field>
          <ErrorMessage name="name" component="p" className={formCss.error} />

          <label htmlFor={numId}>Number</label>
          <Field
            type="text"
            className={formCss.formInput}
            id={numId}
            name="number"
            placeholder="777-77-77"
          ></Field>
          <ErrorMessage name="number" component="p" className={formCss.error} />
          <Button>
            <IoMdPersonAdd size="16" />
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
