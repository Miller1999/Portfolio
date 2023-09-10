import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <nav className="flex h-6 justify-between text-white bg-gray-800">
      <div className="flex items-center gap-1 px-2">
        <SearchIcon />
        <span>busqueda</span>
      </div>
      <div className="flex gap-3">
        <span>Sab,Sept 09</span>
        <span>08:32 pm</span>
      </div>
      <div className="px-2">ES</div>
    </nav>
  );
};

export default NavBar;
