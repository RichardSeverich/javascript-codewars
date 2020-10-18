var person = {
  _name: "John Doe",
  getName: function(){
    return this._name;
  }
}

// Example 1
var name = person.getName();
console.log(name); // return John Doe

// Example 2
console.log(person.getName()); // return John Doe

// Example 3
var getName = person.getName;
console.log(getName()); // return undefined

// Example 4
var getName = person.getName.bind(person);
console.log(getName()); //  return John Doe
