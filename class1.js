"use strict"

class Rectangle{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  calcArea(){
    return this.height * this.width;
  }
}

class ColoredRectangle extends Rectangle{
  constructor(height,width, text, bgColor){
    super(height,width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps(){
    console.log(`text: ${this.text}, color: ${this.bgColor}`)
  }
}

let div = new ColoredRectangle(10,8, 'Aleks', 'red');

div.showMyProps();
console.log(div.calcArea());

// let square = new Rectangle(10,10);
// let long = new Rectangle(5,5);

// console.log(square.calcArea());
// console.log(long.calcArea());
