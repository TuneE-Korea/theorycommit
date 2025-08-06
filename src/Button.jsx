const Button = (props) => {
  const button_style = {
    width: props.size,
    color: props.text_color,
    backgroundColor: props.bg_color,
  };
  return <div style={button_style}>버튼</div>;
};
export default Button;
