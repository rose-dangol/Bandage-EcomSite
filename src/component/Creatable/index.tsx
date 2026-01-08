import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { addCategory, fetchCategories } from "../../services/category.service";
import { useClickAway } from "../../hooks/useClickAway";
import { QUERY_KEYS } from "../../constant/queryKeys";

type CreatableProps = {
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  category: string;
};

type CategoryListType = {
  id: number;
  name: string;
  img?: string;
};

function Creatable({ category, setCategory, name }: CreatableProps) {
  const [inputValue, setInputValue] = useState<string>(name);
  const [categoryList, setCategoryList] = useState<CategoryListType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerRef = useClickAway(() => setIsOpen(false));

  const { data: categories = [] } = useQuery({
    queryKey: [QUERY_KEYS.category],
    queryFn: fetchCategories,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setCategoryList(categories);
  }, [categories]);

  const { mutate: addCategoryMutation } = useMutation({
    mutationFn: async (inputValue: string) => await addCategory(inputValue),
    onSuccess: (data) => {
      setCategoryList((prev) => [...prev, data.data]);
      setCategory(data.data.id);
    },
    onError: (error) => {
      console.error("error:", error.message);
    },
  });

  const filterOptions = categoryList.filter((category) =>
    category.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const isCategoryIncluded = categoryList.some((category) =>
    category.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelectCategory = (category: { id: number; name: string }) => {
    setCategory(category.id);
    setInputValue(category.name);
    setIsOpen(false);
  };

  const handleAddCategory = (inputValue: string) => {
    addCategoryMutation(inputValue);
    setIsOpen(false);
  };

  const filteredCatList = category
    ? categoryList
    : categoryList.filter((ca) => ca.name.includes(inputValue));

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="border border-mutedText rounded p-2">
        <input
          type="text"
          placeholder="Select or Create"
          value={inputValue}
          className="w-full outline-none"
          onChange={(e) => {
            setCategory(undefined);
            setInputValue(e.target.value);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full right-0 left-0 flex flex-col border border-gray-300 bg-white mt-1 rounded shadow-lg z-10 bg-whi max-h-50 overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {!filterOptions.some(
            (c) => c.name.toLowerCase() === inputValue.toLowerCase()
          ) &&
            inputValue && (
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

          {(inputValue === "" || isCategoryIncluded) &&
            filteredCatList?.map((c) => {
              return (
                <div
                  key={c.id}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    inputValue.length > 0 &&
                    c.name.toLowerCase() === inputValue.toLowerCase()
                      ? "text-white bg-primary hover:text-blueBlack"
                      : "bg-white"
                  }`}
                  onClick={() => {
                    handleSelectCategory(c);
                  }}
                >
                  {c.name}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Creatable;
