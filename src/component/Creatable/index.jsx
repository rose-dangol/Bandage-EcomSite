import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCategory, getCategories } from "../../services/category";
import { useState, useEffect, useRef } from "react";

function Creatable({ setCategory, name }) {
  const [inputValue, setInputValue] = useState(name);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const queryClient = useQueryClient();
  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: async (inputValue) => await addCategory(inputValue),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      setCategory(data.data.id);
    },
    onError: (error) => {
      console.log("error:", error.message);
    },
  });

  useEffect(() => {
    if (name) {
      setInputValue(name);
    }
  }, [name]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterOptions = categories.filter((category) =>
    category.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectCategory = (category) => {
    setCategory(category.id);
    setInputValue(category.name);
    setIsOpen(false);
  };

  const handleAddCategory = (inputValue) => {
    mutate(inputValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="border border-mutedText rounded p-2">
        <input
          type="text"
          placeholder="Select or Create"
          value={inputValue}
          className="w-full outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col border border-gray-300 bg-white mt-1 rounded shadow-lg z-10">
          {filterOptions.map((category) => (
            <div
              key={category.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectCategory(category)}
            >
              {category.name}
            </div>
          ))}
          {filterOptions.length === 0 && inputValue && (
            <div className="p-2 cursor-pointer flex justify-between items-center">
              "{inputValue}"
              <button
                onClick={() => handleAddCategory(inputValue)}
                className="bg-primary cursor-pointer text-white px-6 py-2 rounded hover:bg-secondary btn-transitions"
              >
                Create
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Creatable;
