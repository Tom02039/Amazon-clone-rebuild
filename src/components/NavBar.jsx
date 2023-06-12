import { Search } from "./";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import USIcon from "./united-states.png";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="bg-amazonclone flex text-white h-[60px]">
        <div className="flex items-center m-3">
          <Link to={"/"}>
            <img
              className="h-[30px] w-[100px]  m-2"
              alt="logo"
              src={"../images/amazon.png"}
            />
          </Link>
          <div className="grid grid-cols-[min_content_1fr] ml-2">
            <div className="row-start-2">
              <MapPinIcon className="h-[20px]" />
            </div>
            <div className="col-start-2 text-xs text-gray-200 leading-3">
              Deliver to
            </div>
            <div className="col-start-2 text-sm font-bold">United States</div>
          </div>
        </div>
        <div className=" flex items-center grow relative m-4">
          <Search />
        </div>
        <div className="flex items-center gap-9 m-4">
          <div className="flex items-center gap-1 font-bold text-sm">
            <img
              alt="language icon"
              className="h-[16px] w-[16px]"
              src={USIcon}
            />
            EN
          </div>
          <div>
            <div className="text-xs leading-3">Hello, sign in</div>
            <div className="text-sm font-bold">Account & Lists</div>
          </div>
          <div>
            <div className="text-xs leading-3">Returns</div>
            <div className="text-sm font-bold">& Orders</div>
          </div>
          <div className="flex items-end">
            <ShoppingCartIcon className="h-[36px]" />
            <div className="font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 bg-amazonclone-light_blue text-white text-sm p-2 pl-6">
        <div className="flex font-bold">
          <Bars3Icon className="h-[24px]" />
          All
        </div>
        <div>Today's Deals</div>
        <div>Buy Again</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
