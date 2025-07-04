import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
  <h2>
    <Link to="/">
      MoviesCimol
    </Link>
  </h2>

  <div className="react-icon-center">
    <FaReact style={{ fontSize: "3rem", color: "#5488f7" }} />
  </div>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Busque um filme"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
    <button type="submit">
      <BiSearchAlt2 />
    </button>
  </form>
</nav>

  );
};

export default Navbar;
