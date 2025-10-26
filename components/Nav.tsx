import AuthLink from "./nav/AuthLink";
import Logo from "./nav/Logo";
import ModeSwitch from "./nav/ModeSwitch";

const Nav = () => {
  return (
    <nav className="fixed top-3 left-1/2 mx-auto grid w-11/12 -translate-x-1/2 grid-cols-3 rounded-full bg-linear-to-br from-teal-800/30 to-teal-300/50 p-3 shadow-2xl backdrop-blur-2xl md:w-[60vw]">
      <Logo />
      <ModeSwitch />
      <AuthLink />
    </nav>
  );
};

export default Nav;
