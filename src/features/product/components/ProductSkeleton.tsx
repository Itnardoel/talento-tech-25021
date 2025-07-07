export const ProductSkeleton = () => {
  return (
    <article className="flex min-w-[200px] flex-col overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="relative aspect-square w-full animate-pulse bg-gray-300" />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="h-4 w-1/3 animate-pulse rounded bg-gray-300" />
        <div className="h-5 w-full animate-pulse rounded bg-gray-300" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-gray-300" />
        <div className="mt-auto h-6 w-1/4 animate-pulse rounded bg-gray-300" />
      </div>
    </article>
  );
};
