interface ProductPagerProps {
  page: number;
  totalPages: number;
  onChangePage: (pageNumber: number) => void;
}

export const ProductPager = ({
  onChangePage,
  page,
  totalPages,
}: ProductPagerProps) => {
  const scrollToSection = () => {
    const $element = document.getElementById("productos");
    if ($element) {
      $element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="my-4 flex justify-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          type="button"
          key={index + 1}
          disabled={page === index + 1}
          className={`mx-1 cursor-pointer rounded px-2.5 py-1 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600 disabled:pointer-events-none ${page === index + 1 ? "font-bold disabled:pointer-events-none" : ""}`}
          onClick={() => {
            scrollToSection();
            onChangePage(index + 1);
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
