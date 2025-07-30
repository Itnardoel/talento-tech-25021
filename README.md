# Talento Tech 25021

## Descripción del proyecto

Este proyecto es una aplicación web desarrollada con React, TypeScript y Vite, orientada a la gestión de productos, carrito de compras y procesos de checkout, simulando una tienda online. Permite a los usuarios explorar productos, filtrarlos por categorías, agregarlos al carrito y completar el proceso de compra. Además, incluye funcionalidades administrativas para la gestión de productos.

### Funcionalidades principales
- Visualización de productos con detalles y paginación.
- Filtros por categoría, búsqueda y ordenamiento.
- Carrito de compras persistente y gestionable.
- Proceso de checkout y página de agradecimiento.
- Autenticación y gestión de usuario.
- Panel de administración para productos.
- Autenticación con Auth0 usando OAuth de Google.

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Itnardoel/talento-tech-25021.git
   cd talento-tech-25021
   ```
2. **Instala las dependencias:**
   ```bash
   pnpm install
   # o
   npm install
   # o
   yarn install
   ```
3. **Configura las variables de entorno:**
   Crea un archivo .env en la raíz del proyecto con las siguientes variables:
   ```bash
   VITE_MOCKAPI_URL=tu-mockapi-url
   VITE_AUTH0_DOMAIN=tu-dominio.auth0.com
   VITE_AUTH0_CLIENT_ID=tu-client-id
   VITE_AUTH0_REDIRECT_URI=http://localhost:5173
   ```
4. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm dev
   # o
   npm run dev
   # o
   yarn dev
   ```
5. Accede a la aplicación en [http://localhost:5173](http://localhost:5173)

## Uso

- Navega por la tienda, filtra productos y agrégalos al carrito.
- Accede al carrito para revisar o modificar productos seleccionados.
- Completa el proceso de compra desde el checkout.
- Si tienes permisos de administrador, gestiona productos desde el panel de administración.
- Para autenticación:
   La aplicación usa Auth0 con OAuth de Google.
   Se muestra un botón de login/logout que permite iniciar sesión con Google.
   Al autenticarse, el usuario podrá acceder a funcionalidades restringidas.

## Tecnologías utilizadas

- [React](https://react.dev/) (con JSX/TSX)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/) (con reglas recomendadas y soporte para React)
- [pnpm](https://pnpm.io/) (o npm/yarn)
- [Auth0 React SDK](https://auth0.com/docs/libraries/auth0-react)

## Estructura del proyecto

- `src/` — Código fuente principal
  - `features/` — Módulos por dominio: productos, carrito, checkout, usuario, filtros
  - `shared/` — Componentes y utilidades compartidas
  - `assets/` — Recursos estáticos
- `public/` — Archivos públicos
- `index.html` — Entrada principal
- `vite.config.ts` — Configuración de Vite
