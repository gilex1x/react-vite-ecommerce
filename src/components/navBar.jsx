/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shoppingCardContext } from "../context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const NavBarTemplate = () => {
    const context = useContext(shoppingCardContext);
    let activeStyle = "underline underline-offset-4"

    return (
        <nav className="flex items-center justify-between w-full py-4 px-8 font-light text-sm">
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronic' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-order'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin'>
                        SingIn
                    </NavLink>
                </li>
                <li className='flex'>
                    <button>
                        <ShoppingCartIcon className='h-4 w-4 text-blue-500' />
                    </button>
                    {context.count}
                </li>
            </ul>
        </nav>
    )
};

export default NavBarTemplate