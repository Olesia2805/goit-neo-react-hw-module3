import style from './Section.module.css';
import clsx from 'clsx';

const Section = ({ children, className }) => {
  const sectionClassName = clsx(className, {
    // [style.buttons]: className === 'buttons',
    [style.section]: true, // Always apply the base section class
  });
  return <section className={sectionClassName}>{children}</section>;
};

export default Section;
