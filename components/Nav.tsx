import AuthLink from "./nav/AuthLink";
import Logo from "./nav/Logo";

const Nav = () => {
  return (
    <nav className="fixed top-3 left-1/2 mx-auto flex w-11/12 -translate-x-1/2 items-center justify-between rounded-full bg-linear-to-br from-teal-800/50 to-teal-300/30 p-3 shadow-2xl backdrop-blur-2xl md:w-[60vw]">
      <Logo />
      <AuthLink />
    </nav>
  );
};

export default Nav;
