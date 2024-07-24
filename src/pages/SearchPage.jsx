import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FormSearch from "../ui/FormSearch";

function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const query = location?.search?.slice(3);

  return (
    <div className="py-16">
      <div className="sm:hidden my-2 mx-1 sticky top-[70px] z-30">
        <FormSearch className="flex">
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => navigate(`/search?q=${e.target.value}`)}
            value={query?.split("%20")?.join(" ")}
            className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 "
          />
        </FormSearch>
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
      </div>
    </div>
  );
}

export default SearchPage;
