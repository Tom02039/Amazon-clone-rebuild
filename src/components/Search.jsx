import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 rounded">
        <select className="h-[100%] border-r-[1px] border-gray-300 bg-gray-100 text-black text-xs rounded-l p-1">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input className="grow h-[100%] outline-none text-black" type="text" />
        <button className="h-[100%] w-[42px] bg-amazonclone-yellow rounded-r">
          <MagnifyingGlassIcon className="h-[24px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
