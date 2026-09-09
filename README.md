# Talleres de Programación Web

Repositorio con los ejercicios y talleres realizados para la clase de Programación Web.

## Integrantes

| N° | Nombre completo | Carnet |
|----|------------------|--------|
| 1  | Astrid Adamaris Alonzo Gómez | 00091525 |
| 2  | Yukio Alberto Ogawa Urquilla | 00171625 |
| 3  | Rubén Eliseo Martínez Pérez  | 00076325 |

## Talleres

| N° | Tema | Descripción | Carpeta |
|----|------|-------------|---------|
| 1  | Funciones, clases y objetos en JavaScript | Ejercicios prácticos sobre declaración, parámetros, retorno y uso de funciones, clases y objetos en JS | `Taller 1/` |
| 2  | APIs REST con Express | APIs para cálculo de IVA y Renta según parámetros de URL, con validaciones y manejo de errores | `Taller 2/` |

## Estructura del repositorio
```
Taller 1/
├── Ejercicio1.js
├── Ejercicio2.js
├── Ejercicio3.js
├── Ejercicio4.js
├── Ejercicio5.js
├── Ejercicio6.js
└── Portada_Primer_Taller.pdf

Taller 2/
├── ejercicio1/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── ejercicio2/
    ├── server.js
    ├── package.json
    └── package-lock.json

.gitignore
README.md
```

## Cómo ejecutar los ejercicios

### Taller 1 (JavaScript con Node.js)

1. Clonar el repositorio:

   git clone <url-del-repositorio>

2. Entrar a la carpeta `Taller 1/`.
3. Ejecutar el archivo correspondiente con Node.js:

   node Ejercicio1.js

### Taller 2 (APIs con Express)

1. Entrar a la carpeta del ejercicio correspondiente, por ejemplo:

   cd "Taller 2/ejercicio1"

2. Instalar las dependencias:

   npm install

3. Levantar el servidor:

   node server.js

4. Probar el endpoint desde el navegador o Postman/Thunder Client, por ejemplo:

   http://localhost:3000/api/calculo/1000

## Tecnologías utilizadas

- JavaScript
- Node.js
- Express

---
Universidad Centroamericana José Simeón Cañas (UCA)
