import btnCss from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button className={btnCss.btn} type="submit">
      {children}
    </button>
  );
};

export default Button;
