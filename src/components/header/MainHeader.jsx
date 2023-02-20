import Logo from "@/assets/images/logo.jpeg"

const MainHeader = () => {
  return (
    <header className="header flex space-between">
      <img src={Logo} alt="" className="logo"/>
      <h1 className="texto mr-12 text-3xl">ACADEMIA POLITÉCNICA </h1>
      <nav className="contac">
        <a href="https://wa.me/593969899316">Contáctenos</a>
      </nav>
    </header>
  );
};
export default MainHeader;
