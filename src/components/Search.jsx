import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callAPI } from "../utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI("data/suggestions.json").then((suggestionsResult) => {
      setSuggestions(suggestionsResult);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="h-[100%] border-r-[1px] border-gray-300 bg-gray-100 text-black text-xs rounded-l p-1"
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="grow h-[100%] outline-none text-black p-2"
          value={searchTerm}
          type="text"
        />
        <button
          onClick={onHandleSubmit}
          className="h-[100%] w-[42px] bg-amazonclone-yellow rounded-r"
        >
          <MagnifyingGlassIcon className="h-[24px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="w-full bg-white text-black z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
                className="flex items-center gap-2 p-1.5 ml-1 hover:bg-gray-100"
              >
                <MagnifyingGlassIcon className="h-[16px]" />
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
