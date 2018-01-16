var x = 0;
var foo = {
  x: 1,
  bar: function(){
    console.log(this.x);
  }
}
var a = foo.bar;
// foo.bar();

// a();
console.log(window.x)
