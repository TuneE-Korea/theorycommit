const SocialLogin = (props) => {
  const text = {
    f: "Facebook",
    a: "Apple",
    d: "Dribbble",
    t: "Twitch",
  };

  const loginStyle = {
    color: "white",
    backgroundColor: props.backGroundColor,
    borderRadius: "5px",
    padding: "14px 16px",
    border: "none",
    width: "fit-content",
    fontSize: "20px",
    fontWeight: "700",
  };

  return (
    <button style={loginStyle}>
      {props.icon} Login via {text[props.content]}
    </button>
  );
};

export default SocialLogin;
