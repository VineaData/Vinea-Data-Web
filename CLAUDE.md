# vineadata-web — Brain del repo

Web institucional de VineaData. Este archivo es la memoria que leen todos los agentes de la fábrica antes de trabajar.

## Qué es VineaData
Consultora de software de Mendoza, dos socios: Nico (procesos, UI, clientes, UAT) y Ema (arquitectura, desarrollo).
Vende 4 líneas: landings de alta conversión, webs con suscripciones, paneles de operaciones, automatizaciones.
Tono: rioplatense, con voseo, directo, sin jerga técnica para el cliente. Hablar del dolor que se resuelve, no de la herramienta.

## Stack
- Astro 5, sin framework de UI. Componentes `.astro` en `src/components/`.
- Three.js solo en `Hero.astro`, importado de forma dinámica. No importarlo en ningún otro lado.
- Sin Tailwind: CSS con tokens en `src/styles/global.css` y estilos con scope dentro de cada componente.
- Contenido editable SOLO en `src/data/site.ts`. Ningún texto de contacto o caso hardcodeado en componentes.

## Marca (no inventar colores ni fuentes)
- Tokens en `:root` de `global.css`: `--tinta`, `--tinta-2`, `--tinta-3`, `--linea`, `--texto`, `--texto-2`, `--uva`, `--uva-marca`, `--brasa`, `--gris-punto`.
- Brasa (naranja) se usa en UN solo punto por elemento: el punto del logo, la ceja, la bolita final. Nunca como color de texto ni de botón.
- Botones: solo `.btn .btn-1` (primario) y `.btn .btn-2` (secundario). No crear variantes nuevas.
- Tipografías: Space Grotesk (todo) e IBM Plex Mono (etiquetas, datos). Nada más.
- Sin emojis, sin gradientes decorativos, sin sombras salvo el botón de WhatsApp.

## Reglas de calidad
- `npm run build` tiene que pasar sin errores.
- Todo funciona a 390px de ancho, sin scroll horizontal.
- Respetar `prefers-reduced-motion`: toda animación nueva se apaga ahí.
- Accesibilidad: links reales (`<a href>`), botones reales (`<button>`), `aria-label` en íconos sin texto, contraste 4.5:1.
- Las animaciones de aparición (`.rv`) nunca dejan contenido invisible en reposo.

## Rutas de aprobación
- **Siempre PR + revisión humana de Ema:** cambios en `Hero.astro` (escena 3D), `astro.config.mjs`, `package.json`, dependencias nuevas, cualquier script de terceros.
- **PR + revisión humana de Nico:** textos visibles al público, cambios de diseño en secciones.
- **PR con revisión del agente:** datos en `site.ts`, imágenes en `public/`, SEO, accesibilidad.
- Nunca se pushea directo a `main`.

## Dónde está cada cosa
- Pedidos pendientes: `fabrica/issues/`
- Specs aprobadas: `fabrica/specs/`
- Registro de medición: `fabrica/registro.csv`
- Contexto de la empresa (fuera de este repo): vault `vineadata-vault`, archivo `00_SYSTEM_CONTEXT.md`
