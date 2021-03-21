'use strict'

function show(a,b){
  console.log(this);
  function sum(){
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

show(2,3);
let obj = {
  a: 10,
  b: 20,
  c: 30,
  sum: function(){
    function shout(){
      console.log(this);
    }
   shout();
  }
}
obj.sum();

function User(name,id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log('hello ' + this.name);
  }
}
let Sasha = new User('Sasha', 36); // obj
console.log(Sasha.hello);

function sayName(surname){
  console.log(this);
  console.log(this.name + surname);

}

let user = {
  name: 'Sasha'
}

sayName.call(user, 'Chupilka');
sayName.apply(user, ['Chupilkaa']);

function count(n){
  return this * n;
}

let double = count.bind(2);
console.log(double(3));
//1 обычтаная ф = Window
//2 контекст у методов obj сам obj
//3 this в конструкторах и классах это новый экз. obj
//4 ручная привязка this call apply bind

let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
  console.log(this);
  this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) =>{
  console.log(this);
  e.target.style.backgroundColor = 'red';
});

let obj = {
  num: 5,
  sayNumber: function(){
    let say = () => {
      console.log(this.num)
    }
    say();
  }
}
obj.sayNumber();

let double = a => a * 2;
let calc = (a,b) => a * b;

console.log(double(4))


