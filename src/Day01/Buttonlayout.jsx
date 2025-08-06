const Button = (props) => {
  const bg_obj = {
    primary: "#205bf3",
    secondary: "#478df5",
  };

  const radius_obj = {
    hard: "0px",
    smooth: "5px",
    circle: "10px",
  };

  const button_style = {
    backgroundColor: bg_obj[props.bgc],
    color: "white",
    borderRadius: radius_obj[props.borderr],
    border: "none",
    padding: "10px 45px",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  };

  return <button style={button_style}>Button</button>;
};
export default Button;
