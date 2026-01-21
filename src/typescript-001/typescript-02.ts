// Tipos especiales en TypeScript (como any, unknown, etc.)

// ***** ANY *****
// any ❌ (evitar) any elimina la seguridad de TypeScript, por eso lo evito.
// Qué es: Desactiva el sistema de tipos
// Cuándo usar: Migraciones legacy, Código externo no tipado (temporal)
let data: any;
data = 10;
data = "hola";
data.toUpperCase(); // no error

// ***** UNKNOW *****
// unknown ✅ (mejor que any)
// Que es: Tipo desconocido, obliga a validar.
// Cuándo usar: Datos de APIs, JSON, Inputs externos
let value: unknown;
if (typeof value === "string") {
  value.toUpperCase();
}
const dataUn: unknown[] = [1, "hola", true];


// ***** NEVER *****
// never ⚠️: Representa algo que nunca ocurre.
function fail(msg: string): never {
  throw new Error(msg);
}
function check(x: string | number) {
  if (typeof x === "string") return;
  if (typeof x === "number") return;
  // x aquí es never
}
const empty: never[] = [];


// ***** VOID *****
// Función que no retorna valor.
function log(msg: string): void {
  console.log(msg);
}


// ***** NULL ****** 
// null: Qué es: Ausencia intencional de valor.
let user: string | null = null;


// ***** undefined ******
// undefined Qué es: Variable no inicializada.
let valuesome: number | undefined;


// ***** object *****
// object: Qué es: Cualquier objeto (no primitivos).

let obj: object = { a: 1 };


// ***** Function *****
// Function ❌ (mala práctica)
// ❌ No especifica parámetros ni retorno.
let myFuncion: Function;
// ✔️ Mejor de la siguiente manera
let fn1: (a: number) => number;
let fn2: (a: number) => void;


// ***** symbol *****
// symbol Qué es: Identificador único.
const myId = Symbol("id");


// ***** bigint *****
// bigint, Qué es, Números muy grandes.
const big: bigint = 9007199254740991n;


// ***** tuple *****
// Qué es: Array con tipos y orden fijo.

let userTupla: [string, number] = ["Richard", 35];

// ***** readonly *****
// readonly Qué es: Evita modificaciones.
interface User {
  readonly idReadOnly: number;
  name: string;
}
const arr: readonly number[] = [1, 2, 3];


// ***** as const *****
// as const: Qué es: Convierte valores en literales inmutables.
let myStatus1 = "active" as const;
const myStatus2 = "active" as const;


// ***** Record<K, T> ***** (muy entrevistable)
type Roles = "admin" | "user";
const permissions: Record<Roles, boolean> = {
  admin: true,
  user: false
};

// ***** Partial<T> ***** (muy entrevistable)
interface User {
  name: string;
  age: number;
  fatherName?: number;
}

const update: Partial<User> = {
  age: 36
};

// ***** Required<T> ***** (muy entrevistable)
// Hace obligatorias todas las propiedades
type FullUser = Required<User>;

// ***** Pick<T, K> *****
// Selecciona solo algunas propiedades
type UserName = Pick<User, "name">;

// ***** Omit<T, K> *****
// Quita propiedades específicas
type UserWithoutAge = Omit<User, "age">;

// ***** Exclude<T, U> *****
// Elimina tipos de una unión
// salida: ➡️ "a" | "c"
type A = "a" | "b" | "c";
type B = Exclude<A, "b">; // "a" | "c"

// ***** Extract<T, U> *****
// Extrae los tipos en común
// salida: ➡️ "a" | "c"
type BB = Extract<A, "a" | "c">;


// ***** NonNullable<T> *****
// Elimina null y undefined
// salida: String
type Clean = NonNullable<string | null | undefined>;
