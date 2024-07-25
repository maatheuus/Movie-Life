import { useState, useRef, useEffect } from "react";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

const InputSearch = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  const handleInputChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query !== "") {
      setIsMenuVisible(true);
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(query)
      );
      setFilteredOptions(filtered);
    } else {
      setIsMenuVisible(false);
      setFilteredOptions([]);
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
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative w-auto ">
        <input
          type="text"
          ref={inputRef}
          className="bg-transparent px-4 py-1 outline-none border-none"
          placeholder="Search here..."
          onChange={handleInputChange}
        />
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute left-0 w-72 bg-black bg-opacity-85 border border-gray-800 rounded  max-h-96 overflow-y-scroll"
          >
            <ul>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li key={index} className="p-2 cursor-pointer">
                    {option}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">No options found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default InputSearch;
