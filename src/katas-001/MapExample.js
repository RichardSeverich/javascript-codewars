
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
console.log(map1.get('a'));

map1.set('a', 100);
map1.delete('b');
console.log(map1.size);

console.log(map1);

map1.forEach((value, key, map) => {
    console.log(key, value);
})
