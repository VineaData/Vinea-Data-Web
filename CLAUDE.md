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

### Manual de marca (vive fuera del repo)
`C:\VineaData\Marca  y branding\` — ojo, **dos espacios** en "Marca  y branding".
- `Logo · Construcción y tamaños@1x.png` — módulo, resguardo, tamaños mínimos.
- `Logo · Versiones@1x.png` — las versiones oficiales, con el **texto ya convertido a trazos**.

**Antes de dibujar cualquier pieza con el logo, abrir esos dos archivos.** Ya existe arte oficial: no
redibujar el wordmark a mano ni reconstruirlo desde la fuente.

- **Módulo:** todo sale del diámetro del punto (D). Los puntos van a 1,5 D de centro a centro.
- **Resguardo:** 1,5 D libres alrededor del logo. Nada se mete ahí, tampoco una grilla de fondo decorativa.
- **Alineación:** el alto del isotipo es igual al alto de la "d" del wordmark, con las bases coincidentes.
- **Un naranja por elemento:** el isotipo lleva 1 y el separador de "vinea·data" lleva 1. En el lockup
  completo hay 2 y está bien; el "nunca dos" del manual es dentro del isotipo.
- **Nunca:** estirar, rotar, cambiar colores, agregar sombras, ni usar la grilla completa por debajo de 32 px.
- **Tamaños del lockup:** 110 px mínimo · 170 px firma de mail · 260 px header web.
- **Versiones:** Principal horizontal · **Negativo (fondos oscuros, slides, redes)** · Apilado ·
  Isotipo solo · Avatar circular · Favicon (solo la V, sin grilla) · Monocromo · Monocromo blanco.
  Para cualquier pieza sobre fondo Tinta la versión correcta es **Negativo**.

## Verificación
Comando que el builder y el revisor corren antes de dar algo por terminado:

```
npm run build
```

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
- Agentes y comando `/fabrica`: viven en el vault (`vineadata-vault/.claude/`). Abrir Claude Code con `--add-dir` apuntando al vault.
- Pedidos pendientes: `fabrica/issues/`
- Specs aprobadas: `fabrica/specs/`
- Registro de medición: `fabrica/registro.csv`
- Contexto de la empresa (fuera de este repo): vault `vineadata-vault`, archivo `00_SYSTEM_CONTEXT.md`
