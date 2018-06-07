function person(pname){
  this.name = pname;
}

const Messi = new person('Messi');

function say(){
  console.log('hi');
}

const oldObj = {
  a: say,
  b: new Array(1),
  c: new RegExp('ab+c', 'i'),
  d: Messi
}

const newObj = JSON.parse(JSON.stringify(oldObj));
console.log(oldObj, newObj);