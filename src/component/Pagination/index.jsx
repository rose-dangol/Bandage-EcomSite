import React, { useState } from "react";

const Pagination = () => {
  const totalPages = [1, 2, 3];
  const [page, setPage] = useState(1);
  const hanldePageChange = (n) => {
    setPage(n);
  };
  return (
    <div className="mx-auto max-w-max flex items-center justify-center border-2 border-mutedText rounded-lg overflow-hidden">
      <button className="p-6 flex items-center links bg-[#F3F3F3] border-r border-mutedText">
        First
      </button>
      {totalPages.map((i) => (
        <button
          onClick={() => hanldePageChange(i)}
          className={`p-6 flex items-center links border-r border-mutedText ${
            page == i
              ? "text-white bg-primary"
              : "text-primary hover:bg-mutedText"
          }`}
        >
          {i}
        </button>
      ))}
      <button className="p-6 flex items-center links bg-[#F3F3F3]">Next</button>
    </div>
  );
};

export default Pagination;
