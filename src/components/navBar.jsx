import { NavLink } from "react-router-dom";

const NavBarTemplate = ({ children }) => {
    let activeStyle = {
        textDecoration: "underline"
    }
    return (
        <nav className="flex items-center justify-between w-full py-4 px-8 font-light text-sm">
            <ul className="flex items-center gap-4">
                <li>
                    <NavLink to='/' style={({isActive})=>isActive ? activeStyle : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all' style={({isActive})=>isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' style={({isActive})=>isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronic' style={({isActive})=>isActive ? activeStyle : undefined}>
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
            </ul>
        </nav>
    )
};

export default NavBarTemplate