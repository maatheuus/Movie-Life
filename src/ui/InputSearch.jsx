import { useState, useRef, useEffect } from "react";

const InputSearch = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.value.trim() !== "") {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
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
      <div className="relative w-72">
        <input
          type="text"
          ref={inputRef}
          className="bg-transparent px-4 py-1 outline-none border-none hidden sm:block"
          placeholder="Search here..."
          onChange={handleInputChange}
        />
        {isMenuVisible && (
          <div
            ref={menuRef}
            className="absolute left-0 w-full bg-black bg-opacity-40 border border-gray-800 rounded  max-h-96 overflow-y-scroll"
          >
            <ul>
              <li className="p-2  cursor-pointer">Option 1</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 2</li>
              <li className="p-2  cursor-pointer">Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default InputSearch;
