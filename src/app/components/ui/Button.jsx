// Fælles primærknap – samme udtryk som alle andre knapper (se .btn-primary i globals.css)
const Button = ({ name, onClick, type = "button" }) => (
  <button type={type} className="btn-primary" onClick={onClick}>
    {name}
  </button>
);

export default Button;
