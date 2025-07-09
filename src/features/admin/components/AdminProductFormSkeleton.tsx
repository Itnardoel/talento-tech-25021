export const AdminProductFormSkeleton = () => {
  return (
    <div className="flex w-full max-w-80 animate-pulse flex-col gap-2 py-6 lg:py-0">
      <div className="h-8 w-1/2 rounded bg-gray-300" />

      <div className="flex flex-col gap-1">
        <div className="h-5 w-20 rounded bg-gray-300" />
        <div className="h-8 w-full rounded bg-gray-200" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="h-5 w-20 rounded bg-gray-300" />
        <div className="h-8 w-full rounded bg-gray-200" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="h-5 w-20 rounded bg-gray-300" />
        <div className="h-8 w-full rounded bg-gray-200" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="h-5 w-24 rounded bg-gray-300" />
        <div className="h-14.5 w-full rounded bg-gray-200" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="h-5 w-24 rounded bg-gray-300" />
        <div className="h-8 w-full rounded bg-gray-200" />
      </div>

      <div className="mt-2 h-10 w-full rounded bg-gray-300" />
    </div>
  );
};
