/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global binding is binding in the global scope, referencing the window.
* 2. Implicit binding is the binding of this to the left of the . in the reference.
* 3. New binding is applying this keyword to a new object using the new keyword on a constructor.
* 4. Explicit binding is overriding the current object using call or apply with a new context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function thisIsThis() {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding
const tommy = {
    name: 'Tommy',
    age: 31,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
}

tommy.greet();
// Principle 3

// code example for New Binding
function Person(params){
    this.name = params.name;
    this.age = params.age;
};

const ralph = new Person({
    name: 'Ralph',
    age: 29
})





// Principle 4

// code example for Explicit Binding

function greet() {
    return `Hello, my name is ${this.name}`;
}

const jason = {
    name: 'Jason',
    age: 32
}

greet.call(jason);