import { ArrowRight, Shield, Truck, Zap } from "./Icons";

export const Hero = () => {
  const scrollToSection = () => {
    const $element = document.getElementById("productos");
    if ($element) {
      $element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl leading-tight font-bold text-gray-900 lg:text-5xl">
                Última Tecnología,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Precios Incomparables
                </span>
              </h1>
              <p className="max-w-2xl text-xl text-gray-600">
                Descubrí tecnología de vanguardia y hardware premium de las
                marcas líderes del mundo. Envíos rápidos, soporte experto y
                calidad insuperable.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToSection}
              className="group flex transform cursor-pointer items-center justify-center space-x-2 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            >
              <span>Comprar ahora</span>
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Features */}
            <div className="flex flex-col gap-6 pt-8 sm:flex-row">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <Zap className="size-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">
                    Alto Rendimiento
                  </p>
                  <p className="text-xs text-gray-600">
                    Últimas especificaciones
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Shield className="size-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Garantía</p>
                  <p className="text-xs text-gray-600">Protección total</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Truck className="size-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Envío Gratis</p>
                  <p className="text-xs text-gray-600">
                    Compras mayores a $100
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rotate-3 transform transition-transform duration-500 hover:rotate-0">
              <img
                src="https://images.pexels.com/photos/18105/pexels-photo.jpg"
                alt="Featured Tech Product"
                className="h-96 w-full rounded-2xl object-cover shadow-2xl lg:h-[500px]"
              />
              <div className="absolute -right-4 -bottom-4 rounded-xl bg-white p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-gray-900">
                    En Stock
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-600">Listo para enviar</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-6 z-10 animate-bounce rounded-lg bg-white p-3 shadow-lg">
              <p className="text-xs font-semibold text-gray-900">
                Soporte 24/7
              </p>
            </div>
            <div className="absolute bottom-10 -left-8 z-10 rounded-lg bg-blue-600 p-3 text-white shadow-lg">
              <p className="text-xs font-bold">Devoluciones Gratis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
