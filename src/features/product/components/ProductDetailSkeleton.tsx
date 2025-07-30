import { useAuth0User } from "@/features/user/hooks/use-auth0-user";

export const ProductDetailSkeleton = () => {
  const { user, isAdmin } = useAuth0User();

  return (
    <main className="mx-auto mt-4 grid w-full max-w-7xl animate-pulse content-center sm:mt-0">
      <div className="grid gap-8 p-6 md:grid-cols-2">
        <div className="aspect-square w-full max-w-[500px] place-self-center rounded-lg bg-gray-200" />

        <div className="flex flex-col justify-around gap-6 p-4">
          <div className="space-y-4">
            <div className="h-4 w-24 rounded bg-gray-300" /> {/* Category */}
            <div className="h-8 w-2/3 rounded bg-gray-300" /> {/* Title */}
            <div className="h-6 w-1/4 rounded bg-gray-300" /> {/* Price */}
            <div className="h-20 w-full rounded bg-gray-300" />
          </div>

          {user && !isAdmin && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-6 w-20 rounded bg-gray-300" /> {/* Label */}
                <div className="flex items-center space-x-2">
                  <div className="h-9 w-9 rounded-md bg-gray-300" />
                  <div className="h-9 w-12 rounded-md bg-gray-300" />
                  <div className="h-9 w-9 rounded-md bg-gray-300" />
                </div>
              </div>
              <div className="h-10 w-full rounded-md bg-gray-300" />
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-300 py-4">
            <div className="space-y-2 text-center">
              <div className="mx-auto h-6 w-6 rounded-full bg-gray-300" />
              <div className="mx-auto h-3 w-16 rounded bg-gray-300" />
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto h-6 w-6 rounded-full bg-gray-300" />
              <div className="mx-auto h-3 w-16 rounded bg-gray-300" />
            </div>
            <div className="space-y-2 text-center">
              <div className="mx-auto h-6 w-6 rounded-full bg-gray-300" />
              <div className="mx-auto h-3 w-16 rounded bg-gray-300" />
            </div>
          </div>

          {isAdmin && (
            <div className="grid gap-4">
              <div className="h-10 w-full rounded-md bg-gray-300" />
              <div className="h-10 w-full rounded-md bg-gray-300" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
