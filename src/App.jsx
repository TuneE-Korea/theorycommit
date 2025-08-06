import { Apple, Facebook, Dribbble, Twitch } from "lucide-react";
import SocialLogin from "./Day01/Sociallogin";

function App() {
  const sns = [
    { backGroundColor: "#1877f2", icon: <Facebook />, content: "f" },
    { backGroundColor: "#000000", icon: <Apple />, content: "a" },
    { backGroundColor: "#ea4c89", icon: <Dribbble />, content: "d" },
    { backGroundColor: "#9146ff", icon: <Twitch />, content: "t" },
  ];

  return (
    <>
      {/* <section
        className="loginForm"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <SocialLogin
          backGroundColor="facebook"
          content="f"
          icon={<Facebook />}
        />
        <SocialLogin backGroundColor="apple" content="a" icon={<Apple />} />
        <SocialLogin
          backGroundColor="dribbble"
          content="d"
          icon={<Dribbble />}
        />
        <SocialLogin backGroundColor="twitch" content="t" icon={<Twitch />} />
      </section> */}
      {sns.map((v) => (
        <SocialLogin {...v} />
      ))}
    </>
  );
}

export default App;
