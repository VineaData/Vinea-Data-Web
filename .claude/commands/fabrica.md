---
description: Corre un pedido por la fábrica de VineaData (spec → build → revisión → PR)
argument-hint: <número de issue, ej. 001>
---

Corré el pedido `fabrica/issues/$ARGUMENTS-*.md` por la fábrica, en este orden, sin saltear pasos:

1. **Spec:** usá el agente `spec-writer` para generar `fabrica/specs/$ARGUMENTS-*.md`.
   - Si la spec tiene preguntas abiertas, mostrámelas y frená acá.
   - Si no, mostrame la spec y esperá mi OK antes de seguir.
2. **Build:** con mi OK, usá el agente `builder` para implementarla en su rama.
3. **Revisión:** usá el agente `revisor-spec`.
   - Si el veredicto es VUELVE AL BUILDER, mandá las correcciones al `builder` y revisá de nuevo. Máximo 2 vueltas; si sigue fallando, frená y mostrame por qué.
4. **PR:** si está aprobado, pusheá la rama y abrí el PR con `gh pr create`. En el cuerpo poné la spec, la tabla de la revisión y la ruta de aprobación.
5. **Medición:** agregá una línea a `fabrica/registro.csv` con: issue, fecha, vueltas de revisión, minutos que me llevó a mí (preguntame), resultado.

Al final, decime en 3 líneas: qué se hizo, quién tiene que aprobar el PR y qué aprendimos para la próxima.
