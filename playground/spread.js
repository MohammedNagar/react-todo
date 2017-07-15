function add(a,b){
  return a + b;
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));
console.log(add(...[3,41]));

var groupA = ['Mohammed','Ahmad'];
var groupB = ['Aly'];
var final = [...groupB,3,...groupA];
console.log(final);

var person = ['Mohammed',32];
var personTwo = ['Ahmed',25];

function greet(name,age){
  return 'Hi '+ name + ', You are ' + age ;
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mohammed','Joussef'];
var final = ['Samy',...names];

final.forEach(function(n){
  console.log( 'Hi ' + n);
});
