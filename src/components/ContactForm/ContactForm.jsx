import Button from '../Button/Button';
import formCss from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { IoMdPersonAdd } from 'react-icons/io';
import { useId } from 'react';

const ContactForm = () => {
  const nameId = useId();
  const numId = useId();

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
      <Formik>
        <Form className={formCss.form}>
          <label htmlFor={nameId}>Name</label>
          <Field className={formCss.formInput} id={nameId}></Field>
          <label htmlFor={numId}>Number</label>
          <Field className={formCss.formInput} id={numId}></Field>
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
