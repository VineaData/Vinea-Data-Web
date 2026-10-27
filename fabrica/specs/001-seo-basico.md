# 001 · SEO básico

Issue de origen: `fabrica/issues/001-seo-basico.md`

## Objetivo
Que la web se pueda indexar bien (sitemap + robots.txt) y que al pegar el link en WhatsApp o LinkedIn aparezca una vista previa con el logo de VineaData y la frase "Innovación concreta para empresas de Mendoza", sobre fondo Tinta con grilla de puntos.

## Contexto (qué hay hoy)
- `astro.config.mjs` ya tiene `site: 'https://vineadata.com'` (con TODO de dominio definitivo). No hay `@astrojs/sitemap` ni `output` configurado: salida estática por defecto.
- `src/layouts/Base.astro` ya pone `title`, `description`, `canonical`, `theme-color`, `og:type`, `og:title`, `og:description`, `og:url`, `og:locale`. **No hay** `og:image`, `og:site_name` ni ninguna etiqueta `twitter:`.
- Los textos por defecto de `title` y `description` están **hardcodeados en `Base.astro`**, lo que choca con la regla "contenido editable SOLO en `src/data/site.ts`".
- `public/` solo tiene `favicon.svg` (fondo Tinta `#1B1622`, grilla de 5×3 puntos en `--gris-punto`, 4 puntos en `--uva`, 1 punto en `--brasa`). Sirve como referencia de la grilla para la imagen de preview.
- Una sola ruta publicada: `src/pages/index.astro` (`/`). No existe `robots.txt` ni sitemap.
- `package.json`: solo `astro` y `three`.

## Alcance
- **Sitemap sin dependencias nuevas:** endpoint estático `src/pages/sitemap.xml.ts` que genera `urlset` a partir de una lista de rutas declarada en `src/data/site.ts` y de `Astro.site`. No se instala `@astrojs/sitemap` ni se toca `astro.config.mjs` (ver "Fuera de alcance").
- **robots.txt:** endpoint estático `src/pages/robots.txt.ts` que permite el rastreo completo y declara la URL absoluta del sitemap, armada con `Astro.site` (el dominio sigue viviendo solo en `astro.config.mjs`).
- **Imagen de preview:** `public/og.png` de 1200×630, con su SVG fuente `public/og.svg` versionado en el repo. Diseño: fondo `--tinta` (`#1B1622`), grilla de puntos en `--gris-punto` (`#3A3541`) con algunos puntos en `--uva` (`#B48AF0`), wordmark `vinea·data` con el punto separador en `--brasa` (`#FF8A3D`) — único uso de brasa en toda la pieza — y la frase "Innovación concreta para empresas de Mendoza" en Space Grotesk, color `--texto` (`#F4F1F8`). Sin emojis, sin gradientes, sin sombras.
- **Etiquetas en `src/layouts/Base.astro`:** `og:site_name`, `og:image` (URL absoluta), `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.
- **Mover el contenido a `src/data/site.ts`:** nuevo export `seo` con `tituloDefault`, `descripcionDefault`, `siteName`, `ogImagen`, `ogAlt`, `frasePreview`, y nuevo export `rutas` con las rutas del sitemap. `Base.astro` toma los valores de ahí; los strings de `title`/`description` se mudan tal cual, sin reescribir copy.
- La frase de la imagen se escribe una sola vez en `site.ts` (`seo.frasePreview`) y el SVG fuente la repite textualmente igual.

## Fuera de alcance
- Instalar `@astrojs/sitemap` o cualquier dependencia (incluido un rasterizador) y tocar `astro.config.mjs` o `package.json`. Alternativa descartada a propósito: `@astrojs/sitemap` resolvería el sitemap en 3 líneas, pero con una sola página el endpoint propio alcanza y evita la ruta de aprobación de Ema. Si más adelante hay muchas rutas, se reabre como pedido aparte.
- Cambiar el dominio de `astro.config.mjs`. Todo se arma con `Astro.site`, así que cuando se compre el dominio definitivo alcanza con esa línea.
- Reescribir los textos de `title` y `description` (solo se mudan de archivo).
- JSON-LD / schema.org, Google Search Console, analítica, `apple-touch-icon`, manifest, favicons extra.
- Página 404 (issue 002), imágenes de casos y equipo (issue 005), accesibilidad general (issue 006).
- Imagen de preview distinta por página (hoy hay una sola página).

## Archivos a tocar
- `src/data/site.ts`: agregar export `seo` (textos y rutas de la preview) y export `rutas` (lista de paths para el sitemap, hoy `['/']`).
- `src/layouts/Base.astro`: importar `seo`, usarlo como valor por defecto de `title`/`description` y agregar las etiquetas `og:site_name`, `og:image*` y `twitter:*` con URLs absolutas construidas sobre `Astro.site`.
- `src/pages/sitemap.xml.ts`: **nuevo**. `GET` prerenderizado que devuelve XML `application/xml` con un `<url><loc>` por cada entrada de `rutas`.
- `src/pages/robots.txt.ts`: **nuevo**. `GET` prerenderizado que devuelve `text/plain` con `User-agent: *`, `Allow: /` y `Sitemap: <site>/sitemap.xml`.
- `public/og.svg`: **nuevo**. Fuente editable de la imagen de preview, 1200×630, solo con colores de los tokens listados arriba y tipografía Space Grotesk (sin referencias a fuentes remotas).
- `public/og.png`: **nuevo**. Rasterizado de `og.svg` a 1200×630. Se produce con herramientas locales y se commitea el resultado; **si no se puede generar sin agregar nada a `package.json`, el builder se detiene y escala a Ema en vez de instalar una dependencia.**

## Criterios de aceptación
- [ ] CA1: `npm run build` termina sin errores ni warnings nuevos.
- [ ] CA2: `dist/sitemap.xml` existe, abre como XML válido, tiene `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` y contiene `<loc>https://vineadata.com/</loc>` (URL absoluta, igual al `site` de `astro.config.mjs`); además `grep -r "vineadata.com" src/ public/` no devuelve ninguna línea (el dominio solo vive en `astro.config.mjs`).
- [ ] CA3: `dist/robots.txt` existe y contiene exactamente las líneas `User-agent: *`, `Allow: /` y `Sitemap: https://vineadata.com/sitemap.xml`.
- [ ] CA4: `dist/og.png` existe, es PNG de 1200×630 px (verificable con `node -e` leyendo la cabecera IHDR o con cualquier visor) y pesa menos de 300 KB.
- [ ] CA5: `dist/index.html` contiene `<meta property="og:image" content="https://vineadata.com/og.png">`, `og:image:width` = `1200`, `og:image:height` = `630`, un `og:image:alt` no vacío, `og:site_name`, `twitter:card` = `summary_large_image`, `twitter:title`, `twitter:description` y `twitter:image`; y `grep -n "Innovación concreta\|VineaData ·\|Ordenamos tus procesos" src/layouts/Base.astro` no devuelve nada (todo el texto viene de `site.ts`).
- [ ] CA6: en `public/og.svg`, `grep -o "#FF8A3D" public/og.svg | wc -l` devuelve `1`, la frase "Innovación concreta para empresas de Mendoza" aparece textualmente una vez, y no hay ningún color hexadecimal fuera de `#1B1622`, `#3A3541`, `#B48AF0`, `#F4F1F8`, `#FF8A3D`; al abrir `dist/og.png` se leen el wordmark y la frase completos, sin texto cortado por los bordes.

## Ruta de aprobación
PR con revisión del agente (SEO, datos en `site.ts`, imágenes en `public/`) **más OK de Nico** por la frase visible al público en la imagen de preview. No corresponde revisión de Ema porque no se toca `Hero.astro`, `astro.config.mjs`, `package.json` ni se agregan dependencias ni scripts de terceros; si durante la construcción hiciera falta cualquiera de esas cosas, el pedido se detiene y pasa a ruta Ema. Nunca se pushea directo a `main`.

## Preguntas abiertas
Ninguna.

---

## Enmienda 1 — 2026-10-27 (aprobada por Ema)

**Motivo:** apareció el manual de marca, que vive **fuera del repo** en `C:\VineaData\Marca  y branding\`
(`Logo · Construcción y tamaños@1x.png` y `Logo · Versiones@1x.png`) y que el `CLAUDE.md` no referenciaba.
La primera versión de `og.svg` lo contradice en tres puntos y el CA6 original, tal como estaba escrito,
premiaba la versión equivocada.

### Qué dice el manual y no sabíamos
- Existe una versión oficial **"Negativo — fondos oscuros, slides, redes"**: isotipo + wordmark sobre Tinta.
  Es exactamente la pieza que pide este issue.
- **Resguardo:** 1,5 D libres alrededor del logo (D = diámetro del punto). *Nada* se mete ahí, incluidas
  grillas de fondo decorativas.
- **Alineación:** el alto del isotipo es igual al alto de la "d" del wordmark, con las bases coincidentes.
- **Un punto naranja por elemento:** el isotipo lleva 1 y el separador de "vinea·data" lleva 1. En el lockup
  completo hay **2 naranjas**, y eso es correcto. El "nunca dos" del manual se refiere a dentro del isotipo.
- Prohibido: estirar, rotar, cambiar colores, agregar sombras.

### Cambios al alcance
- `public/og.svg` y `public/og.png` se **rehacen** con el lockup completo (isotipo + wordmark), respetando
  resguardo y alineación. La frase y el fondo Tinta se mantienen.
- `CLAUDE.md`: se agrega un puntero a la carpeta del manual y las reglas de arriba, para que ningún agente
  vuelva a redibujar el logo a mano.
- **No se tocan** `sitemap.xml.ts`, `robots.txt.ts`, `Base.astro` ni `site.ts`: ya están aprobados.

### CA6 — REEMPLAZADO
> ~~CA6 original: `grep -o "#FF8A3D" public/og.svg | wc -l` devuelve `1`.~~
> Queda anulado: exigía un solo naranja y el lockup correcto tiene dos.

- [ ] **CA6-bis:** en `public/og.svg`, `grep -o "#FF8A3D" public/og.svg | wc -l` devuelve exactamente `2`:
  uno en el punto del isotipo y uno en el separador del wordmark. La paleta sigue cerrada a
  `#1B1622`, `#3A3541`, `#B48AF0`, `#F4F1F8`, `#FF8A3D`. La frase aparece textualmente una vez.

### Criterios nuevos
- [ ] **CA7:** el isotipo está presente como marca discreta, replicando la grilla 5×3 de
  `src/components/Logo.astro` (celdas `U,B,B,B,U,B,U,B,U,B,B,B,O,B,B`), a la izquierda del wordmark,
  con el alto igual al de la "d" y las bases alineadas.
- [ ] **CA8:** se respeta el resguardo: ningún punto de la grilla de fondo invade la caja del logo
  (lockup completo) más 1,5 D en los cuatro lados. Verificable a ojo sobre `dist/og.png` y en el SVG
  comprobando que no hay `circle` de fondo dentro de esa zona.
- [ ] **CA9:** `CLAUDE.md` contiene la ruta de la carpeta del manual de marca y las reglas de resguardo,
  módulo y versiones oficiales.
