import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useFetch } from "../hooks/useFetch";
import Card from "../ui/Card";
import FormSearch from "../ui/FormSearch";
import Spinner from "../ui/Spinner";

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const { data, isLoading } = useFetch(
    `search/multi?query=${!inputValue ? [] : inputValue}`
  );

  function handleInput(e) {
    e.preventDefault();
    setInputValue(inputRef.current.value);
  }

  // IMPLEMENT FEAT OF LOAD MORE DATA
  return (
    <div className="py-16">
      <div className="my-2 sticky top-[70px] z-30">
        <FormSearch className="flex">
          <div className="max-w-[500px] w-full px-3 mx-auto">
            <div className="relative ">
              <div className="absolute z-10 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <CiSearch />
              </div>
              <input
                type="search"
                ref={inputRef}
                defaultValue={inputValue}
                className="block w-full p-4 ps-10 text-sm text-stone-100 rounded-lg bg-stone-950/60 backdrop-blur-3xl outline-none"
                placeholder="Search here..."
                required
              />
              <button
                onClick={handleInput}
                className="text-stone-100 font-semibold absolute end-2.5 bottom-2.5 bg-[#2332a4f6] rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </FormSearch>
      </div>

      {isLoading && <Spinner />}

      {data.length > 0 && (
        <div className="container mx-auto px-7">
          <h3 className="capitalize text-lg lg:text-xl font-semibold my-6">
            Search Results for: {inputValue}
          </h3>

          <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start">
            {data.map((searchData) => {
              return <Card data={searchData} key={searchData.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
