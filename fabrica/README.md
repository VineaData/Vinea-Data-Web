# Fábrica VineaData (versión mínima)

Cada pedido pasa por la misma línea:

```
Issue → spec-writer → (tu OK) → builder → revisor-spec → PR → aprobación humana → main
                                            ↑______| máx. 2 vueltas
```

## Cómo usarla

1. Escribí el pedido como lo diría un cliente en `fabrica/issues/NNN-titulo.md`.
2. En Claude Code, dentro del repo: `/fabrica NNN`.
3. Revisá la spec cuando te la muestre y dale OK.
4. Aprobá el PR según la ruta que indique (agente, Nico o Ema).
5. Completá la línea de `registro.csv` cuando te pregunte los minutos.

## Por qué así

- **Un solo revisor** al principio. Se agrega uno nuevo (seguridad, diseño, código) cuando un tipo de error aparece dos veces en `registro.csv`.
- **La spec frena si faltan datos.** Los issues 004 y 005 están pensados para probar eso: el agente tiene que pedir el número y las fotos, no inventarlos.
- **El registro** es la base para estimar cuánto cuesta cada tipo de pedido cuando la fábrica trabaje para clientes.

## Orden sugerido

001 → 002 → 006 (prueban la línea completa) · 004 → 005 (prueban que frena sin datos) · 003 (el más delicado: ruta Ema).
