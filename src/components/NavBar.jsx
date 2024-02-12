import logo from "../assets/images/cloudy.png";
export const NavBar = () => {
  return (
    <div className="mx-auto h-1/2">
      <nav className="bg-slate-700 flex justify-between lg:justify-start items-center">
        <div className="w-1/2 p-2">
          <img width="60" src={logo} alt="Weather" />
        </div>
      </nav>
    </div>
  );
};
