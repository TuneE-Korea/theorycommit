const Circle = (props) => {
  const circle_style = {
    width: props.w,
    height: props.h,
    borderRadius: "9999px",
    backgroundColor: props.bg,
  };
  return <div style={circle_style}></div>;
};
export default Circle;
