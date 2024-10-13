import Button from '../Button/Button';
import formCss from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { IoMdPersonAdd } from 'react-icons/io';

const ContactForm = () => {
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
          <label>Name</label>
          <Field></Field>
          <label>Number</label>
          <Field></Field>
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
