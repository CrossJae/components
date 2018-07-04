// 2018.1.16 mixin new prototype
// https://github.com/cynil/articles/blob/master/%E4%BB%8Emixin%E5%88%B0new%E5%92%8Cprototype%EF%BC%88%E4%B8%80%EF%BC%89.md

// 1. Object.create()，实现Javascript式继承
// ES5终于提供了一个Object.create()的方法，用于设置[[prototype]]指针。

// 公共属性写在原型上
var person = {
  speak: function(){
    console.log(this.name);
  }
}
// 创建对象
var artist = Object.create(person);

// 自己的属性
artist.name = 'cross';
artist.age = '30';

artist.speak();

// 2. 封装
// 返回的对象既会生成它自己的独有属性，又会继承person的属性
// 缺点，不可以使用instanceof
var person = {
  getName: function(){
    return this.name;
  }
}
function genArtist(name, age){
  var artist = Object.create(person);

  artist.name = name;
  artist.age = age;

  return artist;
}
var vinci = genArtist('cross', 29);

// 3. 使用instanceof
function A(name, age){
  var anew = Object.create(A.prototype);// 指定[[prototype]]
  anew.name = name;
  anew.age = age;
  return anew;
}
var B = A();
console.log(B instanceof A);// true

// 4. 从3引申到new，发现new的原理就是内部指定了prototype，并返回一个对象
function A(name, age){
  this.name = name;
  this.age = age;
}
var B = new A();
console.log(B instanceof A);// true
