import { Link } from "react-router-dom";

const Navbar = () => {
    let menuLink = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "User List",
            url: "/users-list"
        },
        {
            title: "Content",
            url: "/contact"
        },
        {
            title: "Profile",
            url: "/profile"
        },
    ]
  return (
    <div className="container mx-auto">
        <div className="navbar bg-[#392467] mb-5">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl text-white">React js</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        menuLink.map((navlink, index) => (
                            <li key={index} ><Link to={navlink.url} className="nav-item">{navlink.title}</Link></li>
                        ))
                    }
                <li className="nav-item">
                    <details>
                        <summary>
                            Parent
                        </summary>
                        <ul className="p-2 rounded-t-none bg-[#392467] z-40">
                            <li className="nav-item"><Link >Link 1</Link></li>
                            <li className="nav-item"><Link >Link 2</Link></li>
                        </ul>
                    </details>
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;