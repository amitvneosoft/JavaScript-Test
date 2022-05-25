// var x = 5;
// function getName() {
//     console.log("Hello taylor")
// }

// getName()
// console.log(x)
// console.log(getName)

function foo() {
    let a = b = 0;
    console.log(a,b)
    a++;
    return a;
}
  
foo();
console.log(typeof a, typeof b)