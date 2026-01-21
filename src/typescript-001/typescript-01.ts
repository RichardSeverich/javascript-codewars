// Tipos básicos

let nombre: string = "Richard";
let edad: number = 33;
let activo: boolean = true;

// Inferencia de tipos (muy común)
let ciudad = "Cochabamba"; // TypeScript infiere string
let anios = 10;            // number

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis", "Carlos"];
let edades: Array<number> = [20, 30, 40];

// Funciones
function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): void {
  console.log("Hola " + nombre);
}

// Interfaces (MUY importante)

interface Usuario {
  nombre: string;
  email: string;
  edad: number;
  activo: boolean;
}

const user1: Usuario = {
  nombre: "Richard",
  email: "richard@mail.com",
  edad: 33,
  activo: true
};

let user2: Usuario = {
  nombre: "Michael",
  email: "Michael@mail.com",
  edad: 31,
  activo: true
};

interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string; // opcional
}

let producto1: Producto = {
  nombre: "Papa",
  precio: 25,
};

let producto2: Producto = {
  nombre: "Tomate",
  precio: 1,
  descripcion: "Tomate Unidad"
};


// Union de tipos
let id: number | string;
id = 10;
id = "abc123";

function imprimirId(id: number | string) {
  console.log(id);
}


// Type vs Interface (rápido)
// 👉 type es mejor para uniones
// 👉 interface es mejor para objetos

type Estado = "activo" | "inactivo" | "pendiente";
let estado: Estado = "activo";

// ***** Type *****
// Es un alias para cualquier tipo: primitivo, unión, intersección, objeto.
// No puede ser extendido dinámicamente, pero es más versátil para combinaciones.
type Point = { x: number; y: number }; 
type MyResponse = "success" | "error";
function printPoint(p: Point): void { 
    console.log(`(${p.x}, ${p.y})`); 
}
const p1: Point = { x: 10, y: 20 }; 
printPoint(p1); // → (10, 20)

// ***** Interface *****
// Se usa para definir contratos de objetos.
// Puede ser extendida 
// (si defines la misma interfaz en dos lugares, se combinan).

interface MyPoint { x: number; y: number } 
interface Point3D extends Point { z: number }
function movePoint(p: Point3D): Point3D { 
    return { x: p.x + 1, y: p.y + 1, z: p.z + 1 }; 
}

// Declaration Merging en Interfaces (Con type NO se puede, da error)
// Primera definición 
interface MyUser { id: number; name: string;} 
// Segunda definición (en otro archivo o más abajo) 
interface MyUser { email: string; } 
// Resultado: la interfaz final es la combinación 
const myUser1: MyUser = { id: 1, name: "Alice", email: "alice@example.com" };


// Tambien se puede usar funcion
interface InerfaceUser { 
    id: number; 
    name: string; 
    printName: Function;
    printFullName(lastName: string): void; // firma del método

}
const someUser1: InerfaceUser = { 
    id: 1, 
    name: "Alice",
    printName: function() {
        console.log(this.name);
    },
    printFullName: function(lastName: string) {
        console.log(this.name + lastName);
    }
};


// ***** Clases (POO) *****
// Define tanto estructura como comportamiento.
// Class: además de cumplir contratos, te da instanciación, herencia y lógica compartida.
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}



interface Logger { 
    log(message: string): void; // solo la firma }
}

class ConsoleLogger implements Logger { 
    log(message: string): void { 
        console.log("LOG:", message); // implementación real 
    } 
}

const logger1 = new ConsoleLogger(); 
logger1.log("Hola mundo"); // → LOG: Hola mundo

