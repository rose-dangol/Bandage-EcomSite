type PaginationPropsType = {
  meta: {
    totalPages: number,
    limit?: number
  },
  currentPage: number,
  onPageChange: (page:number)=>void,
}
const Pagination = ({ meta, currentPage, onPageChange }:PaginationPropsType) => {
  if (!meta) return null;

  const totalPages = Array.from({ length: meta.totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < meta.totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mx-auto max-w-max flex items-center justify-center border border-mutedText shadow-sm rounded-lg overflow-hidden">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-6 flex items-center links text-mutedText bg-[#F3F3F3] border-r border-mutedText disabled:opacity-50"
      >
        First
      </button>
      {totalPages.map((i) => (
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`p-6 flex items-center links border-r border-mutedText btn-transitions ${
            currentPage === i
              ? "text-white bg-primary"
              : "text-primary hover:bg-mutedText"
          }`}
        >
          {i}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage >= meta.totalPages}
        className="p-6 flex items-center links bg-[#F3F3F3] text-mutedText disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
