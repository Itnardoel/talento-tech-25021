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
  return (
    <div className="my-4 flex justify-center">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          type="button"
          key={index + 1}
          className={`mx-1 cursor-pointer ${page === index + 1 ? "font-bold" : ""}`}
          onClick={() => {
            onChangePage(index + 1);
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
