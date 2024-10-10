import itemCss from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import Button from '../Button/Button';

const Contact = ({ contact }) => {
  return (
    <>
      <>
        <p className={itemCss.text}>
          <BsPersonFill size="16" />
          {contact.name}
        </p>
        <p className={itemCss.text}>
          <FaPhoneAlt size="12" />
          {contact.number}
        </p>
      </>
      <>
        <Button>
          <MdOutlineDelete size="20" />
          Delete
        </Button>
      </>
    </>
  );
};

export default Contact;
