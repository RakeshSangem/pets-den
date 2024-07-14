import { Button, Navbar, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavList() {
  return (
    <ul className="my-2 flex">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={"/add-pet"}>
          <Button variant="text">Add pet</Button>
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to={"/pets"}>
          <Button variant="text">Pets</Button>
        </NavLink>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const { user, logout } = useAuth();

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 text-black shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="">
          <NavList />
        </div>
        <div>
          {!user ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : (
            <Button onClick={logout}>Logout</Button>
          )}
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarSimple;
