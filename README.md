# FerreteríaEl10

Pre-entrega del proyecto React 2026: catálogo web de ferretería desarrollado con React, Vite y JavaScript. La identidad visual anaranjada homenajea la garra y la pasión de Diego Armando Maradona; el proyecto no implica afiliación ni aval oficial.

**Alumno:** Peralta Marello, Facundo Gabriel

**DNI:** 42663064

## Funcionalidades

- Catálogo de productos desde un archivo JSON local con `fetch` y `useEffect`.
- Categorías de herramientas, pinturería, electricidad y plomería.
- Página de detalle de cada producto.
- Carrito global mediante Context API, con contador actualizado en tiempo real y persistencia local.
- Navegación con React Router DOM.
- Diseño adaptable a pantallas móviles y de escritorio.

## Tecnologías

- React y Vite
- JavaScript
- React Router DOM
- Context API

## Requisitos e inicio local

Necesitás Node.js 20.19+ o 22.12+ y npm.

1. Cloná el repositorio y abrí su carpeta en VS Code.
2. En la terminal integrada ejecutá `npm install`.
3. Ejecutá `npm run dev` y abrí la dirección local que indique Vite.

## Comandos disponibles

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run build` | Compila el sitio para producción en `dist/`. |
| `npm run preview` | Previsualiza localmente la compilación. |

## Rutas

- `/`: catálogo completo.
- `/categoria/herramientas`: herramientas.
- `/categoria/pintureria`: pinturería.
- `/categoria/electricidad`: electricidad.
- `/categoria/plomeria`: plomería.
- `/producto/:id`: detalle del producto.
- `/carrito`: contenido y total del carrito.

## Estructura principal

- `src/components/`: layout, encabezado, navegación, pie, tarjetas y catálogo.
- `src/context/`: contexto y estado global del carrito.
- `src/pages/`: páginas de detalle, carrito y ruta no encontrada.
- `public/productos.json`: datos de ejemplo cargados por el catálogo.
- `public/_redirects` y `vercel.json`: reglas de fallback para rutas SPA.

## Publicación

El proyecto puede desplegarse en Netlify o Vercel. Usa `npm run build` como comando de compilación y `dist` como directorio de publicación. El archivo `public/_redirects` contiene el fallback para las rutas de React Router.

Repositorio: https://github.com/facuperma/Pre-entrega-React-2026

> Los nombres y precios de productos, marca, datos de contacto y perfiles del pie de página son contenido ficticio de demostración; reemplazalos por datos reales antes de una publicación comercial.


