import Searcher from "../Searcher/Searcher"
import NavLogo from "./nav-logo"
import NavUser from "./nav-user"

const Nav = () => {
  return (
    <div className="w-full flex justify-between sticky top-[0px] bg-[#0f0f0f] py-[8px] ">
        <NavLogo/>
        <Searcher/>
        <NavUser/>
    </div>
  )
}

export default Nav