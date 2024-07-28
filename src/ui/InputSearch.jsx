import { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CardInput from "./CardInput";
import SpinnerMini from "./SpinnerMini";
import useDebounce from "../hooks/useDebounce";

const InputSearch = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const debouncedInputValue = useDebounce(inputValue, 400);

  const { data, isLoading } = useFetch(
    hasTyped && debouncedInputValue
      ? `search/multi?query=${!debouncedInputValue ? [] : debouncedInputValue}`
      : null
  );

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    setHasTyped(true);
    if (query !== "") {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setIsMenuVisible(false);
      setInputValue("");
      setHasTyped(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-auto">
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        className="bg-transparent px-4 py-1 outline-none border-none"
        placeholder="Search here..."
      />
      {isMenuVisible && (
        <div
          ref={menuRef}
          className="absolute left-0 w-72 bg-black bg-opacity-85 border border-gray-800 rounded  max-h-96 overflow-y-scroll scrollbar-none"
        >
          {isLoading ? (
            <span className="flex justify-center py-10">
              <SpinnerMini />
            </span>
          ) : data.length > 0 ? (
            data.map((data) => <CardInput data={data} key={data.id} />)
          ) : (
            <p className="text-neutral-400 p-4">No data available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
