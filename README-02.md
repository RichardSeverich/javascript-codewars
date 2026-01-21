# Correr Archivos de typescript .ts

## Forma 1
Instalar typescript: `npm install -g typescript`
Compilar: `tsc nombreDeMiArchivo.ts` Esto genera: `nombreDeMiArchivo.js`
Ejecutar: `node nombreDeMiArchivo.js`

## Forma 2
Instalar dependencia: `npm install -g ts-node typescript`
Ejecutar: `ts-node nombreDeMiArchivo.ts`

## Forma 3
Instalar typescript: `npm install -g typescript`
Inicializar `tsc --init`
Compilar todo el proyecto `tsc`
Estructura típica:
```
src/
  index.ts
dist/
  index.js
```

Ejecutar: `node dist/index.js`
