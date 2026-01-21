// Generics (OBLIGATORIO)
// Los genéricos permiten escribir código reutilizable sin perder tipado.

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hola");
identity<number>(10);


function getFirst<T>(arr: T[]): T {
  return arr[0];
}


// ENUM VS TYPE
// Prefiero union types porque son más simples y generan menos JS.
enum Status1 {
  Active,
  Inactive
}
type Status2 = "active" | "inactive";


// strict mode (IMPORTANTE)
/*
{
  "strict": true
}
*/
// incluye:vnoImplicitAnyv y strictNullChecks
// Trabajo siempre con strict activado para evitar errores en producción.

