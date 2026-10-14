# FerreteríaEl10 — catálogo React

Proyecto académico de ferretería desarrollado con React, Vite y JavaScript. Incluye navegación por categorías, carga de productos desde JSON, página de detalle y carrito global con Context API. La identidad rinde homenaje a la garra y pasión de Diego Armando Maradona; no implica afiliación ni aval oficial.

> FerreteríaEl10, los productos, precios, datos de contacto y los perfiles del equipo son contenido ficticio de demostración. Reemplazalos por información real antes de publicar.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Iniciar en desarrollo

1. Abrí esta carpeta en VS Code.
2. En la terminal integrada ejecutá `npm install` si las dependencias todavía no están instaladas.
3. Ejecutá `npm run dev` y abrí la dirección local que muestra Vite.

## Comandos

- `npm run dev`: inicia el servidor local.
- `npm run lint`: verifica el código con ESLint.
- `npm run build`: crea la versión de producción en `dist/`.
- `npm run preview`: previsualiza la compilación local.

## Estructura

- `src/components/`: Layout, header, navegación, footer, tarjetas y catálogo.
- `src/context/CartContext.jsx`: estado global y persistencia local del carrito.
- `src/pages/`: detalle de producto, carrito y página 404.
- `public/productos.json`: productos cargados usando `fetch`.
- `public/_redirects` y `vercel.json`: fallback SPA para publicación.

## Rutas

- `/`: catálogo completo.
- `/categoria/:categoryId`: productos por categoría.
- `/producto/:id`: detalle y opción de agregar al carrito.
- `/carrito`: cantidades y total del carrito.

Las categorías disponibles son herramientas, pinturería, electricidad y plomería. La descripción y el estilo visual hacen un homenaje a Diego Armando Maradona sin sugerir aval o afiliación oficial.

## Publicación

Ejecutá `npm run build` y publicá la carpeta `dist` en Netlify o Vercel. También tendrás que crear un repositorio GitHub y compartir ambos enlaces en la entrega. No se publicó la app ni se creó un repositorio automáticamente.
